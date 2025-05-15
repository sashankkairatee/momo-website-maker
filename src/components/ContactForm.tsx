
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error and success when user starts typing again
    if (error) setError(null);
    if (success) setSuccess(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      // Call the edge function
      const response = await fetch(
        "https://nmpevmqotiiqpjgfybmp.supabase.co/functions/v1/send-confirmation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Check database status
      if (data.dbStatus === "success") {
        // Successfully stored in database
        
        // Check email statuses
        if (data.customerEmailStatus === "sent" && data.notificationEmailStatus === "sent") {
          // Both emails sent successfully
          setSuccess("Message sent! Thank you for contacting us. We'll get back to you soon.");
          toast({
            title: "Message sent!",
            description: "Thank you for contacting us. We'll get back to you soon.",
          });
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else if (data.customerEmailStatus === "sent") {
          // Only customer email sent
          setSuccess("Your message was received! You'll receive a confirmation email shortly.");
          toast({
            variant: "default",
            title: "Message received",
            description: "Your message was saved, and you'll receive a confirmation email shortly.",
          });
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          // Neither email sent but database save succeeded
          setSuccess("Your message was received! We'll get back to you soon.");
          toast({
            variant: "default",
            title: "Message received",
            description: "Your message was saved but there was an issue sending emails. We'll still get back to you soon.",
          });
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        }
      } else {
        // Failed to store in database
        throw new Error("Failed to save your message. Please try again later.");
      }
    } catch (err: any) {
      console.error("Error submitting form:", err);
      setError(err.message || "Something went wrong. Please try again.");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {success && (
        <Alert variant="default" className="border-green-500 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-700">Success</AlertTitle>
          <AlertDescription className="text-green-600">{success}</AlertDescription>
        </Alert>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Name
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          required
          className="w-full min-h-[120px]"
        />
      </div>

      <Button
        type="submit"
        className="bg-[#e67e22] hover:bg-[#d35400] w-full py-2.5 md:py-3 text-base md:text-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
