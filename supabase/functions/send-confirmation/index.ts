
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

// Initialize Resend with API key from environment variables
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Set up CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Create a Supabase client
const supabaseUrl = "https://nmpevmqotiiqpjgfybmp.supabase.co";
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseKey);

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse the request body
    const { name, email, message }: ContactRequest = await req.json();

    // Store message in the database
    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert({ name, email, message });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    // Send confirmation email to the customer
    const customerEmail = await resend.emails.send({
      from: "Momo & More <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Momo & More!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e67e22;">Thank You for Contacting Us!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a summary of your message:</p>
          <div style="background-color: #f8f8f8; padding: 15px; border-left: 4px solid #e67e22; margin: 20px 0;">
            ${message}
          </div>
          <p>Best regards,<br>The Momo & More Team</p>
        </div>
      `,
    });

    // Send notification email to restaurant
    const notificationEmail = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["info@momoandmore.com"], // Replace with the restaurant's email
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e67e22;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f8f8f8; padding: 15px; border-left: 4px solid #e67e22; margin: 20px 0;">
            ${message}
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { customerEmail, notificationEmail });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
