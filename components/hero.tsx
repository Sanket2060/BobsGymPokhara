"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const heroImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/girlsflexingbody.webp-WGv49fEAazz3qbybkS8VVlKK0G3xIf.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/groupofboysflexingbody-kRBHd4n70SOwCCJG4IpCJ80jlqNhS6.jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover object-[center_20%]"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your <span className="text-primary">Body</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join BobsGym and unlock your full potential with expert trainers,
            cutting-edge equipment, and a supportive community
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2 group">
              Start Your Journey
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
