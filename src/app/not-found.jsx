"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { 
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineArrowLeft,
  HiOutlineMail,
  HiOutlineExternalLink,
  HiOutlineBookOpen,
  HiOutlineSparkles,
  HiOutlineSupport,
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineLightBulb
} from "react-icons/hi";

export const metadata = {
  title: "Not Found ",
  description: "This is 404 page",
};

const NotFoundPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [randomFloatingNumbers, setRandomFloatingNumbers] = useState([]);

  useEffect(() => {
    // Generate random floating numbers for animation
    const numbers = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      value: Math.floor(Math.random() * 9) + 1,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setRandomFloatingNumbers(numbers);

    // Track mouse movement for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const popularLinks = [
    { href: "/", label: "Home", icon: HiOutlineHome },
    { href: "/blogs", label: "Blog", icon: HiOutlineBookOpen },
    { href: "/about", label: "About Us", icon: HiOutlineUserGroup },
    { href: "/contact", label: "Support", icon: HiOutlineSupport },
  ];

  const suggestions = [
    "Check the URL for typos",
    "Go back to the previous page",
    "Use the search bar to find content",
    "Visit our homepage for popular articles",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-primary/5 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Numbers Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {randomFloatingNumbers.map((num) => (
          <div
            key={num.id}
            className="absolute text-primary/10 font-bold text-4xl animate-float"
            style={{
              left: `${num.left}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${num.duration}s`,
              animationDelay: `${num.delay}s`,
            }}
          >
            {num.value}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div 
          className="max-w-4xl mx-auto text-center transition-transform duration-300"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        >
          {/* 404 Number with Animation */}
          <div className="relative mb-8">
            <div className="text-[150px] md:text-[250px] lg:text-[350px] font-black leading-none select-none">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                4
              </span>
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient animation-delay-500">
                0
              </span>
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent animate-gradient animation-delay-1000">
                4
              </span>
            </div>
            
            {/* Glitch Effect Overlay */}
            <div className="absolute inset-0 text-[150px] md:text-[250px] lg:text-[350px] font-black leading-none select-none opacity-30 pointer-events-none">
              <span className="text-primary/20">404</span>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-bounce">
              <HiOutlineSparkles className="w-4 h-4" />
              <span>Page Not Found</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Oops! Looks like you're lost
            </h1>
            
            <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, we're here to help you find your way back.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/40" />
              <input 
                type="text" 
                placeholder="Search for articles, pages, or topics..." 
                className="input input-bordered w-full pl-12 pr-4 py-3 focus:input-primary rounded-full shadow-lg"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = `/search?q=${e.target.value}`;
                  }
                }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/" className="btn btn-primary gap-2 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
              <HiOutlineHome className="w-4 h-4" />
              Back to Home
            </Link>
            <Link href="/blogs" className="btn btn-outline gap-2 px-8 rounded-full hover:scale-105 transition-transform">
              <HiOutlineBookOpen className="w-4 h-4" />
              Browse Articles
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn btn-ghost gap-2 px-8 rounded-full"
            >
              <HiOutlineArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>

          {/* Popular Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group p-4 rounded-xl bg-base-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center"
              >
                <link.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Suggestions Box */}
          <div className="max-w-lg mx-auto">
            <div className="bg-base-100 rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineLightBulb className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Quick Suggestions</h3>
              </div>
              <ul className="space-y-2 text-left">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-base-content/70">
                    <span className="text-primary mt-1">•</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-12 pt-8 border-t border-base-200">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-base-content/60">
              <Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-1">
                <HiOutlineMail className="w-4 h-4" />
                Contact Support
              </Link>
              <Link href="/sitemap" className="hover:text-primary transition-colors">
                View Sitemap
              </Link>
              <Link href="/report" className="hover:text-primary transition-colors">
                Report Issue
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;