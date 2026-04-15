"use client"

import Link from "next/link";
import Image from "next/image";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  const resources = [
    { href: "/blogs", label: "Blog" },
    { href: "/docs", label: "Documentation" },
    { href: "/faq", label: "FAQ" },
    { href: "/support", label: "Support" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-[#1877f2]" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-[#1da1f2]" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-[#e4405f]" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-[#0077b5]" },
    { icon: FaGithub, href: "https://github.com", label: "GitHub", color: "hover:text-[#333]" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube", color: "hover:text-[#ff0000]" },
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 cursor-pointer right-8 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-focus transition-all duration-300 animate-bounce"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}

      <footer className="bg-base-200 text-base-content">
        {/* Main Footer Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Company Info Section */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-3.442 1.476 3.442 1.476a1 1 0 01-.788 1.838l-4-1.714a.999.999 0 01-.356-.257l-2.5-1.5v2.98a1 1 0 00.5.866l7 3.5a1 1 0 00.788 0l7-3.5a1 1 0 00.5-.866v-2.98l-2.5 1.5a.999.999 0 01-.356.257l-4 1.714a1 1 0 11-.788-1.838l3.442-1.476-3.442-1.476a1 1 0 11.788-1.838l4 1.714c.14.06.26.15.356.257l2.5 1.5v-2.98a1 1 0 00-.5-.866l-7-3z" />
                  </svg>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  BrandName
                </span>
              </Link>
              
              <p className="text-sm text-base-content/70 leading-relaxed">
                Empowering businesses with cutting-edge solutions and exceptional service. 
                We deliver innovation and excellence in every project.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-sm text-base-content/70">
                  <FaMapMarkerAlt className="text-primary w-4 h-4" />
                  <span>123 Business Ave, Suite 100, City, State 12345</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-base-content/70">
                  <FaEnvelope className="text-primary w-4 h-4" />
                  <a href="mailto:info@brandname.com" className="hover:text-primary transition-colors">
                    info@brandname.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-base-content/70">
                  <FaPhone className="text-primary w-4 h-4" />
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="font-bold text-lg mb-4 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary mt-1"></span>
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm text-base-content/70 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="font-bold text-lg mb-4 relative inline-block">
                Resources
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary mt-1"></span>
              </h3>
              <ul className="space-y-2">
                {resources.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm text-base-content/70 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="font-bold text-lg mb-4 relative inline-block">
                Newsletter
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary mt-1"></span>
              </h3>
              <p className="text-sm text-base-content/70 mb-4">
                Subscribe to our newsletter for updates and exclusive offers.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="input input-bordered w-full input-sm focus:input-primary"
                    required
                  />
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-sm whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              
              {/* Social Links */}
              <div className="mt-6">
                <h4 className="font-semibold text-sm mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-base-content/60 ${social.color} transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider my-6"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-base-content/60">
            <div>
              &copy; {currentYear} BrandName. All rights reserved.
            </div>
            
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
            
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>by BrandName</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;