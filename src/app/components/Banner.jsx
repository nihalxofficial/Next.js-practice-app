import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiPlay } from "react-icons/hi";

const Banner = () => {
  return (
    <section className="relative h-screen min-h-150 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Innovate. Create.
            <span className="block text-primary">Transform.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            We help businesses grow with cutting-edge technology solutions 
            and exceptional customer service.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Link 
              href="/contact" 
              className="btn btn-primary gap-2 px-8 rounded-full"
            >
              Get Started
              <HiArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/learn-more" 
              className="btn btn-outline btn-white gap-2 px-8 rounded-full text-white border-white hover:bg-white hover:text-black"
            >
              <HiPlay className="w-4 h-4" />
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;