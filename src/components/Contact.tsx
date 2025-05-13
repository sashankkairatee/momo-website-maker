
import { MapPin, Clock, Home } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-momoDark mb-2">Contact Us</h2>
          <div className="h-1 w-20 bg-momoOrange mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to make a reservation? Drop us a message!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-5 sm:p-6 md:p-7 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-momoDark">Send a Message</h3>
            <ContactForm />
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="bg-white p-5 sm:p-6 md:p-7 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-momoDark">Location & Hours</h3>
              
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-momoOrange mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">
                      Nepalgunj Main Road,<br />
                      Next to Central Mall,<br />
                      Nepalgunj, Nepal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-momoOrange mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-gray-600">
                      Monday - Saturday: 11:00 AM - 9:00 PM<br />
                      Sunday: 12:00 PM - 8:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Home className="w-5 h-5 sm:w-6 sm:h-6 text-momoOrange mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Reservations</p>
                    <p className="text-gray-600">
                      Phone: +977-081-523456<br />
                      Email: info@momoandmore.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 sm:p-6 md:p-7 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-momoDark">Find Us</h3>
              <div className="w-full h-60 sm:h-64 md:h-68 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28121.098721338855!2d81.59615802824198!3d28.062392085050992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998617cf3d2d931%3A0x43d8fa1c8dab09ba!2sNepalgunj%2C%20Nepal!5e0!3m2!1sen!2sus!4v1714780122250!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
