import Link from "next/link";
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiClock,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineChat,
  HiOutlineGlobe,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
  HiOutlineUser,
  HiOutlinePencil,
  HiOutlinePaperAirplane
} from "react-icons/hi";

export const metadata = {
  title: "Contact page",
  description: "This is Contact page",
};

const ContactPage = () => {
  const contactInfo = [
    {
      icon: HiOutlineMail,
      title: "Email Us",
      details: ["hello@company.com", "support@company.com"],
      link: "mailto:hello@company.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: HiOutlinePhone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      link: "tel:+15551234567",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: HiOutlineLocationMarker,
      title: "Visit Us",
      details: ["123 Business Avenue, Suite 100", "San Francisco, CA 94105"],
      link: "https://maps.google.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: HiOutlineClock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday - Sunday: Closed"],
      link: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond within 24 hours during business days. For urgent matters, please call our support line."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes! We specialize in creating custom solutions tailored to your specific business needs."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee for all our services. No questions asked."
    },
    {
      question: "Can I schedule a consultation?",
      answer: "Absolutely! Use the contact form to schedule a free consultation with our team."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <HiOutlineChat className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Let's Talk
              </span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/70 leading-relaxed max-w-2xl mx-auto">
              Have a question or want to work with us? We'd love to hear from you. 
              Reach out and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
                <div className="relative p-6 rounded-2xl bg-base-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-base-content/60 text-sm mb-1">{detail}</p>
                  ))}
                  {info.link !== "#" && (
                    <Link href={info.link} className="inline-block mt-3 text-primary text-sm hover:underline">
                      Contact Now →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 md:py-20 bg-base-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <HiOutlineMail className="w-4 h-4" />
                  <span>Send Message</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Get In Touch</h2>
                <p className="text-base-content/60 mt-2">Fill out the form and we'll get back to you shortly</p>
              </div>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <div className="relative">
                      <HiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/40" />
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="input input-bordered w-full pl-10 focus:input-primary"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <div className="relative">
                      <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/40" />
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="input input-bordered w-full pl-10 focus:input-primary"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <div className="relative">
                    <HiOutlinePhone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/40" />
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      className="input input-bordered w-full pl-10 focus:input-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <div className="relative">
                    <HiOutlinePencil className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/40" />
                    <input 
                      type="text" 
                      placeholder="How can we help you?" 
                      className="input input-bordered w-full pl-10 focus:input-primary"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea 
                    rows="5" 
                    placeholder="Tell us about your project or inquiry..." 
                    className="textarea textarea-bordered w-full focus:textarea-primary"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full gap-2 group"
                >
                  Send Message
                  <HiOutlinePaperAirplane className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-xs text-base-content/50 text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
            
            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-base-100 rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <HiOutlineGlobe className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-base-content/60">Interactive Map</p>
                    <p className="text-xs text-base-content/40">123 Business Avenue, San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              {/* Office Location Details */}
              <div className="bg-base-100 rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Our Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <HiLocationMarker className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p className="text-sm text-base-content/60">123 Business Avenue, Suite 100<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HiClock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-sm text-base-content/60">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="bg-base-100 rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="btn btn-circle btn-outline hover:btn-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a href="#" className="btn btn-circle btn-outline hover:btn-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.52-11.192c0-.214-.005-.428-.015-.642A9.936 9.936 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="btn btn-circle btn-outline hover:btn-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="#" className="btn btn-circle btn-outline hover:btn-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <HiOutlineSparkles className="w-4 h-4" />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base-content/70">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-base-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-sm text-base-content/60">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prefer to talk directly?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Call us anytime at <span className="font-bold">+1 (555) 123-4567</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="tel:+15551234567" className="btn bg-white text-primary hover:bg-gray-100 border-0 px-8 rounded-full">
                Call Now
              </Link>
              <Link href="mailto:hello@company.com" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary rounded-full px-8">
                Send Email
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;