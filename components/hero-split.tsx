"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HeroSplit() {

  const router = useRouter();

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden pt-20">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 z-10 flex items-center justify-center">
        <div className="animate-fadeInUp max-w-xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Achieve Your <span className="text-primary">Fitness</span> Goals
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The best gym in Pokhara for strength, fitness, and personal
            training.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                router.push("/contact");
              }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2 group hover:cursor-pointer"
            >
              Join Now
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                router.push("/pricing");
              }}
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300 hover:cursor-pointer"
            >
              View Plans
            </button>
          </div>
        </div>
      </div>

      {/* Right Image with Carousel */}
      <div className="hidden lg:block w-1/2 h-full relative">
        <Image
          src={"/professionalhelpingstudent.jpg"}
          alt="Fitness community"
          fill
          className="object-cover object-[50%_60%] transition-opacity duration-1000"
          priority
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
