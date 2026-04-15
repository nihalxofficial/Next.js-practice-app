import Link from "next/link";
import { 
  HiArrowRight, 
  HiCheck, 
  HiSparkles, 
  HiChartBar, 
  HiUsers, 
  HiShieldCheck,
  HiPlay,
  HiStar,
  HiLightningBolt,
  HiChip,
  HiOutlineCode,
  HiOutlineCloud,
  HiOutlineDesktopComputer,
  HiOutlineRefresh,
  HiChevronRight
} from "react-icons/hi";

const HomePage = () => {
  const features = [
    {
      icon: HiOutlineCode,
      title: "Modern Tech Stack",
      description: "Built with latest technologies for optimal performance",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: HiOutlineCloud,
      title: "Cloud Native",
      description: "Scalable infrastructure that grows with your business",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: HiOutlineDesktopComputer,
      title: "Responsive Design",
      description: "Perfect experience on all devices and screen sizes",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: HiOutlineRefresh,
      title: "Real-time Updates",
      description: "Live data synchronization across all platforms",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "This platform transformed our business. The best investment we've made!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content: "Incredible features and outstanding support. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      content: "Game-changer for our team. We've seen 300% growth since switching.",
      rating: 5
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: ["Up to 1,000 users", "10GB storage", "Basic support", "API access"],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      features: ["Up to 10,000 users", "100GB storage", "Priority support", "Advanced API", "Analytics"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited users", "Unlimited storage", "24/7 dedicated support", "Custom solutions", "SLA guarantee"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 py-20 md:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm animate-bounce">
              <HiSparkles className="w-4 h-4" />
              <span>✨ Limited Time Offer - Save 50%</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Build Amazing
              </span>
              <br />
              <span>Digital Products</span>
            </h1>
            
            <p className="text-lg md:text-xl text-base-content/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Create stunning websites and applications with our powerful platform. 
              Used by over 10,000+ happy customers worldwide.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/get-started" className="btn btn-primary gap-2 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                Get Started Free
                <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/demo" className="btn btn-outline gap-2 px-8 rounded-full hover:scale-105 transition-transform duration-300">
                <HiPlay className="w-4 h-4" />
                Watch Demo
              </Link>
            </div>
            
            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-base-300">
              <p className="text-sm text-base-content/50 mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-50">
                <span className="text-xl font-bold">COMPANY</span>
                <span className="text-xl font-bold">BRAND</span>
                <span className="text-xl font-bold">TECH</span>
                <span className="text-xl font-bold">GLOBAL</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="currentColor" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <HiLightningBolt className="w-4 h-4" />
              <span>Powerful Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-base-content/70 text-lg">
              Packed with powerful features to help you build better products faster
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
                <div className="relative p-6 rounded-2xl bg-base-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-base-content/60">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Counters */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-sm opacity-90">Active Users</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-sm opacity-90">Uptime</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-base-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <HiStar className="w-4 h-4" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Loved by Developers Worldwide
            </h2>
            <p className="text-base-content/70 text-lg">
              Don't just take our word for it
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="card-body">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-base-content/70 italic">"{testimonial.content}"</p>
                  <div className="mt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-base-content/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <HiChip className="w-4 h-4" />
              <span>Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base-content/70 text-lg">
              Choose the plan that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative card ${plan.popular ? 'border-2 border-primary shadow-2xl' : 'shadow-xl'} hover:shadow-2xl transition-all hover:-translate-y-2`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="badge badge-primary badge-lg">Most Popular</div>
                  </div>
                )}
                <div className="card-body text-center">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-base-content/50">{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <HiCheck className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="card-actions mt-6">
                    <Link href="/get-started" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} w-full rounded-full`}>
                      Get Started
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed version without SVG background */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of satisfied customers and start building amazing products today
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/get-started" className="btn bg-white text-primary hover:bg-gray-100 border-0 px-8 rounded-full gap-2">
                Start Free Trial
                <HiChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary rounded-full px-8">
                Contact Sales
              </Link>
            </div>
            <p className="text-sm opacity-75 mt-6">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;