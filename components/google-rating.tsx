"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function GoogleRating() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeInUp">
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center justify-center">
                <div className="text-5xl font-bold text-primary mb-2">4.9</div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-6 mb-2">
              Highly Rated on Google
            </h3>

            <p className="text-muted-foreground mb-6">
              Join hundreds of satisfied members who have transformed their
              fitness journey at BobsGym
            </p>

            <Button
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/ThzMEMvMgfyrefqu9",
                  "_blank"
                )
              }
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 w-24 h-12 rounded-xl hover:cursor-pointer"
            >
              <Star size={18} />
              Rate us
            </Button>
          </div>

          {/* Right Section – Photo Placeholder */}
          <div className="w-full h-40 md:h-72 bg-border/40 border border-border flex items-center justify-center overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benchpressimage-vfqLiIACr6mwKePe83Q72VOjG0DQBf.jpg"
              alt="Gym machines"
              width={600}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
