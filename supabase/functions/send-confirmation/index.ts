
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
    const customerEmailPromise = resend.emails.send({
      from: "Momo & More <onboarding@resend.dev>",
      to: [email],
      subject: "🙌 Thank You for Contacting Momo & More!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #e67e22; border-bottom: 1px solid #e67e22; padding-bottom: 10px;">Thank You for Contacting Us!</h2>
          <p>Dear <strong>${name}</strong>,</p>
          <p>We appreciate you reaching out to <strong>Momo & More</strong>. 🍜</p>
          <p>Our team has received your message and will get back to you as soon as possible.</p>
          <p><strong>Here's what you submitted:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #e67e22; margin: 15px 0;">
            ${message}
          </div>
          <p>Until then, stay hungry 😋 and thanks for thinking of us!</p>
          <p>Warm regards,<br/><strong>The Momo & More Team</strong></p>
          <hr/>
          <p style="font-size: 12px; color: #888;">This is an automated message from <a href="https://momo-website-maker.lovable.app/" target="_blank">momoandmore.com</a></p>
        </div>
      `,
    });

    // Send notification email to restaurant
    const restaurantEmail = "momoandmore01@gmail.com";
    const notificationEmailPromise = resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [restaurantEmail], 
      subject: "📩 New Contact Form Submission - Momo & More",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #e67e22; border-bottom: 1px solid #e67e22; padding-bottom: 10px;">🍜 New Contact Form Submission</h2>
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📝 Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #e67e22; margin: 15px 0;">
            ${message}
          </div>
          <p style="font-size: 12px; color: #888;">This message was sent from your contact form on <a href="https://momo-website-maker.lovable.app/" target="_blank">your website</a>.</p>
        </div>
      `,
    });

    // Wait for both emails to be sent
    const [customerEmailResult, notificationEmailResult] = await Promise.all([
      customerEmailPromise,
      notificationEmailPromise
    ]);

    // Log the results for debugging
    console.log("Email results:", {
      customerEmail: customerEmailResult,
      notificationEmail: notificationEmailResult
    });

    return new Response(
      JSON.stringify({ 
        success: true,
        customerEmailStatus: customerEmailResult?.error ? "failed" : "sent",
        notificationEmailStatus: notificationEmailResult?.error ? "failed" : "sent" 
      }),
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
