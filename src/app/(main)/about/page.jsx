import Link from "next/link";
import { 
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineBadgeCheck,
  HiOutlineHeart,
  HiOutlineLightBulb,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineChip,
  HiOutlineRocket,
  HiOutlineTruck,
  HiOutlineCalendar,
  HiOutlineUserGroup
} from "react-icons/hi";

export const metadata = {
  title: "About page",
  description: "This is About page",
};

const AboutPage = () => {
  const stats = [
    { label: "Happy Clients", value: "10K+", icon: HiOutlineUsers, color: "from-blue-500 to-cyan-500" },
    { label: "Countries Served", value: "50+", icon: HiOutlineGlobeAlt, color: "from-green-500 to-emerald-500" },
    { label: "Awards Won", value: "25+", icon: HiOutlineStar, color: "from-yellow-500 to-amber-500" },
    { label: "Years of Excellence", value: "8+", icon: HiOutlineHeart, color: "from-red-500 to-pink-500" },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge solutions.",
      icon: HiOutlineLightBulb,
      color: "text-blue-500",
    },
    {
      title: "Customer Centric",
      description: "Your success is our priority. We're committed to your growth.",
      icon: HiOutlineUsers,
      color: "text-green-500",
    },
    {
      title: "Excellence Always",
      description: "We never compromise on quality and attention to detail.",
      icon: HiOutlineBadgeCheck,
      color: "text-yellow-500",
    },
    {
      title: "Integrity Matters",
      description: "Transparency and honesty guide every decision we make.",
      icon: HiOutlineCheckCircle,
      color: "text-purple-500",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "10+ years of experience in digital innovation",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Former tech lead at leading tech companies",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Award-winning designer with creative vision",
    },
    {
      name: "David Kim",
      role: "Product Manager",
      bio: "Passionate about building great products",
    },
  ];

  const milestones = [
    { year: "2016", title: "Company Founded", description: "Started with a vision to transform digital experiences" },
    { year: "2018", title: "First Office", description: "Opened our first headquarters in San Francisco" },
    { year: "2020", title: "Global Expansion", description: "Expanded operations to 3 continents" },
    { year: "2023", title: "10K Customers", description: "Reached 10,000 happy customers worldwide" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 py-20 md:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <HiOutlineSparkles className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Our Company
              </span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/70 leading-relaxed">
              We're on a mission to transform how businesses leverage technology 
              to grow and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <HiOutlineHeart className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Empowering Businesses Through Technology
              </h2>
              <p className="text-base-content/70 leading-relaxed">
                We believe that every business deserves access to cutting-edge technology 
                that drives real results. Our mission is to democratize digital innovation 
                and help companies of all sizes achieve their full potential.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Deliver exceptional value to our clients</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Foster innovation and creative thinking</span>
                </div>
                <div className="flex items-start gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">Build lasting partnerships with our customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <HiOutlineBriefcase className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-base-content/60">Our Mission Illustration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-base-content/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <HiOutlineLightBulb className="w-4 h-4" />
              <span>Core Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-base-content/70">
              Our core values shape our culture and guide every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-base-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-full bg-${value.color.split('-')[1]}-100 flex items-center justify-center mb-4`}>
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-base-content/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <HiOutlineClock className="w-4 h-4" />
              <span>Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Path to Excellence
            </h2>
            <p className="text-base-content/70">
              Key milestones that shaped our company's growth and success.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  <div className="flex-1">
                    <div className="bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-sm text-base-content/60">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <HiOutlineUserGroup className="w-4 h-4" />
              <span>Leadership Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-base-content/70">
              Passionate experts dedicated to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <HiOutlineUserGroup className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-sm text-base-content/60">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life and achieve remarkable results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn bg-white text-primary hover:bg-gray-100 border-0 px-8 rounded-full"
              >
                Get in Touch
              </Link>
              <Link 
                href="/services" 
                className="btn btn-outline border-white text-white hover:bg-white hover:text-primary rounded-full px-8"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-base-100 shadow-lg">
              <HiOutlineLocationMarker className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-sm text-base-content/60">123 Business Avenue, Suite 100<br />San Francisco, CA 94105</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-base-100 shadow-lg">
              <HiOutlineMail className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-sm text-base-content/60">hello@company.com<br />support@company.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-base-100 shadow-lg">
              <HiOutlinePhone className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-sm text-base-content/60">+1 (555) 123-4567<br />Mon-Fri, 9am-6pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;