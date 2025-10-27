"use client"

import Image from "next/image"
import { useState } from "react"

const celebrities = [
  {
    name: "Rajesh Hamal",
    title: "Renowned Actor & Fitness Enthusiast",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rajeshhamalatgym-2IjqHMHU3yA5r6FdmEuxEllgQxrLAh.jpg",
    description: "Celebrated Nepali actor and fitness icon visiting BobsGym",
  },
  {
    name: "Anoop Bikram",
    title: "Celebrity & Fitness Ambassador",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/withnepaliceleb_anoopbikram-1gsT8ZiFWt4601UYxLV0BzJU9kZuyM.jpg",
    description: "Popular celebrity supporting our fitness community",
  },
]

export default function CelebrityVisits() {
  const [hoveredCelebrity, setHoveredCelebrity] = useState<number | null>(null)

  return (
    <section id="celebrity-visits" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Celebrity <span className="text-primary">Visits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the celebrities who trust BobsGym for their fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {celebrities.map((celebrity, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCelebrity(index)}
              onMouseLeave={() => setHoveredCelebrity(null)}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={celebrity.image || "/placeholder.svg"}
                  alt={celebrity.name}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-white">{celebrity.name}</h3>
                  <p className="text-lg text-primary font-semibold">{celebrity.title}</p>
                  <p className="text-gray-200 text-sm">{celebrity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fadeInUp">
          <p className="text-lg text-muted-foreground mb-6">
            Be part of our growing community of fitness enthusiasts and celebrities
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
            Join BobsGym Today
          </button>
        </div>
      </div>
    </section>
  )
}
