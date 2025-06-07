import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  interest: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'residential'
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  useEffect(() => {
    // Set document title
    document.title = "Contact Us | RG Infra Developers";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Prepare WhatsApp message
      const message = `New Contact Form Submission:%0A%0A
        Name: ${formData.name}%0A
        Email: ${formData.email}%0A
        Phone: ${formData.phone}%0A
        Interest: ${formData.interest}%0A
        Subject: ${formData.subject}%0A
        Message: ${formData.message}`;
      
      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/919966966863?text=${message}`, '_blank');
      
      // Reset form
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interest: 'residential'
      });
      
      // Reset success message after a delay
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="relative py-20 bg-primary-blue">
        <div className="absolute inset-0 opacity-20 bg-pattern-grid"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're here to answer your questions and help you find the perfect property
          </p>
        </div>
      </section>
      
      {/* Contact information and form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-primary-gold/10 rounded-lg flex items-center justify-center">
                        <MapPin size={22} className="text-primary-gold" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Our Location</h3>
                      <p className="text-gray-600 mt-1">
                        C-3, 12-1-863/2, Beside Asif Nagar Police Station, Mehdipatnam, Hyderabad, T.G -500028
                      </p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-primary-gold/10 rounded-lg flex items-center justify-center">
                        <Phone size={22} className="text-primary-gold" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Call Us</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="tel:+91 9966966863" className="hover:text-primary-gold transition-colors">
                          +91 9966966863
                        </a>
                        <br />
                        <a href="tel:+91 9182695782" className="hover:text-primary-gold transition-colors">
                          +91 9182695782
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-primary-gold/10 rounded-lg flex items-center justify-center">
                        <Mail size={22} className="text-primary-gold" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Email Us</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="mailto:rginfradevelopersinfo@gmail.com" className="hover:text-primary-gold transition-colors">
Info@rginfradevelopers.com                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Working hours */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-primary-gold/10 rounded-lg flex items-center justify-center">
                        <Clock size={22} className="text-primary-gold" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Working Hours</h3>
                      <p className="text-gray-600 mt-1">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social media links */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center text-blue-600"
                      aria-label="Follow on Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-gray-100 hover:bg-sky-500 hover:text-white transition-colors flex items-center justify-center text-sky-500"
                      aria-label="Follow on Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-gray-100 hover:bg-pink-600 hover:text-white transition-colors flex items-center justify-center text-pink-600"
                      aria-label="Follow on Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white transition-colors flex items-center justify-center text-blue-700"
                      aria-label="Follow on LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                
                {/* Success message */}
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md flex items-start">
                    <svg className="h-5 w-5 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm">We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-gold/50 focus:border-primary-gold outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-gold/50 focus:border-primary-gold outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-gold/50 focus:border-primary-gold outline-none transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="1234567890"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>
                    
                    {/* Interest */}
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                        I'm Interested In
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-gold/50 focus:border-primary-gold outline-none transition-colors"
                      >
                        <option value="residential">Residential Property</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="investment">Investment Opportunity</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    {/* Subject */}
                    <div className="md:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-gold/50 focus:border-primary-gold outline-none transition-colors"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    {/* Message */}
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-gold/50 focus:border-primary-gold outline-none transition-colors ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Please type your message here..."
                      ></textarea>
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>
                  </div>
                  
                  {/* Submit button */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" /> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map section */}
      <section className="py-8">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.050835999444!2d78.44863231534383!3d17.40688798806493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb972e9e6d5f0f%3A0x1e3e0b8b9b9b9b9b!2sC-3%2C%2012-1-863%2F2%2C%20Beside%20Asif%20Nagar%20Police%20Station%2C%20Mehdipatnam%2C%20Hyderabad%2C%20Telangana%20500028!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="RG Infra Developers Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;