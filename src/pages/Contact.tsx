import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      setIsSubmitting(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 800));
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div 
      className="min-h-screen px-4 py-20 sm:px-6 lg:px-8"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.body,
      }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ 
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading
            }}
          >
            Contact Us
          </h1>
          <p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            Have a question? We'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
          
          {/* Contact Info - Left Side */}
          <div className="order-2 lg:order-1">
            <h3 
              className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8"
              style={{ color: theme.colors.text }}
            >
              Get in touch
            </h3>
            
            <div className="space-y-6 sm:space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: `${theme.colors.primary}15` }}
                >
                  <Mail size={20} style={{ color: theme.colors.primary }} />
                </div>
                <div>
                  <h4 
                    className="font-medium text-base mb-1"
                    style={{ color: theme.colors.text }}
                  >
                    Email
                  </h4>
                  <p 
                    className="text-sm sm:text-base"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    hello@multitheme.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: `${theme.colors.primary}15` }}
                >
                  <Phone size={20} style={{ color: theme.colors.primary }} />
                </div>
                <div>
                  <h4 
                    className="font-medium text-base mb-1"
                    style={{ color: theme.colors.text }}
                  >
                    Phone
                  </h4>
                  <p 
                    className="text-sm sm:text-base"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: `${theme.colors.primary}15` }}
                >
                  <MapPin size={20} style={{ color: theme.colors.primary }} />
                </div>
                <div>
                  <h4 
                    className="font-medium text-base mb-1"
                    style={{ color: theme.colors.text }}
                  >
                    Address
                  </h4>
                  <p 
                    className="text-sm sm:text-base"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    123 Theme Street<br />
                    Design City, DC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="order-1 lg:order-2">
            {isSubmitted ? (
              <div 
                className="p-6 sm:p-8 text-center rounded-lg border"
                style={{
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border
                }}
              >
                <h3 
                  className="text-lg sm:text-xl font-semibold mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  Message sent!
                </h3>
                <p 
                  className="text-sm sm:text-base"
                  style={{ color: theme.colors.textSecondary }}
                >
                  We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200"
              >
                {/* Name Field */}
                <div className="mb-6">
                  <label 
                    className="block text-sm font-medium mb-2 text-left"
                    style={{ color: theme.colors.primary }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      borderColor: theme.colors.border,
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.text,
                      fontFamily: theme.fonts.body,
                    }}
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-6">
                  <label 
                    className="block text-sm font-medium mb-2 text-left"
                    style={{ color: theme.colors.primary }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      borderColor: theme.colors.border,
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.text,
                      fontFamily: theme.fonts.body,
                    }}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Field */}
                <div className="mb-8">
                  <label 
                    className="block text-sm font-medium mb-2 text-left"
                    style={{ color: theme.colors.primary }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                    style={{
                      borderColor: theme.colors.border,
                      backgroundColor: theme.colors.surface,
                      color: theme.colors.text,
                      fontFamily: theme.fonts.body,
                    }}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
                  style={{ fontFamily: theme.fonts.body }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;