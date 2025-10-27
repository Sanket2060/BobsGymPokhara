"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/girlsflexingbody.webp-WGv49fEAazz3qbybkS8VVlKK0G3xIf.jpeg",
    title: "Women's Fitness",
    description: "Empowering women to achieve their fitness goals",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/groupofboysflexingbody-kRBHd4n70SOwCCJG4IpCJ80jlqNhS6.jpg",
    title: "Group Training",
    description: "High-energy group workouts for motivation",
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/girlperformingcardio-fZs2Hoz2ZK3UBuX8hG5woIcVAFEjeP.jpg",
    title: "Cardio Zone",
    description: "State-of-the-art cardio equipment",
  },
  {
    id: 4,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trainer_krishnaguru2-OhPhDWb9aT4UBBWk49uz40fY2IAFaj.jpg",
    title: "Strength Training",
    description: "Build muscle with expert guidance",
  },
  {
    id: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trainer_krishnaguru-PfFWiANu0D9x1kTbrv17nJVtqshCVL.jpg",
    title: "Personal Training",
    description: "One-on-one coaching for maximum results",
  },
  {
    id: 6,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rajeshhamalatgym-2IjqHMHU3yA5r6FdmEuxEllgQxrLAh.jpg",
    title: "Community",
    description: "Join our supportive fitness community",
  },
]

export default function GalleryPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gallery & <span className="text-primary">Facilities</span>
            </h1>
            <p className="text-xl text-muted-foreground">Explore our state-of-the-art gym facilities and community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl border border-border hover:border-primary transition-all duration-300 cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative w-full aspect-square overflow-hidden bg-muted">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 transition-all duration-300 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
