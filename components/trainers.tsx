"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { useState } from "react"

const trainers = [
  {
    name: "Krishna Guru",
    specialty: "Strength & Bodybuilding",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trainer_krishnaguru-PfFWiANu0D9x1kTbrv17nJVtqshCVL.jpg",
    hoverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trainer_krishnaguru2-OhPhDWb9aT4UBBWk49uz40fY2IAFaj.jpg",
    rating: 4.9,
    bio: "Expert in muscle building and strength training with years of professional experience",
  },
]

export default function Trainers() {
  const [hoveredTrainer, setHoveredTrainer] = useState<number | null>(null)

  return (
    <section id="trainers" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Expert Trainer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Certified professional dedicated to your success
          </p>
        </div>

        <div className="flex justify-center">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fadeInUp w-full max-w-sm"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredTrainer(index)}
              onMouseLeave={() => setHoveredTrainer(null)}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={
                    hoveredTrainer === index && trainer.hoverImage
                      ? trainer.hoverImage
                      : trainer.image || "/placeholder.svg"
                  }
                  alt={trainer.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">{trainer.name}</h3>
                <p className="text-primary font-semibold mb-3">{trainer.specialty}</p>
                <p className="text-muted-foreground mb-4">{trainer.bio}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={i < Math.floor(trainer.rating) ? "fill-primary text-primary" : "text-muted"}
                      size={16}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">{trainer.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
