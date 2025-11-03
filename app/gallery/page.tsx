"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/girlsflexingbody.webp-WGv49fEAazz3qbybkS8VVlKK0G3xIf.jpeg",
    title: "Women's Fitness",
    description: "Empowering women to achieve their fitness goals",
    objectPosition: "center top",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/groupofboysflexingbody-kRBHd4n70SOwCCJG4IpCJ80jlqNhS6.jpg",
    title: "Group Training",
    description: "High-energy group workouts for motivation",
    objectPosition: "center center",
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/girlperformingcardio-fZs2Hoz2ZK3UBuX8hG5woIcVAFEjeP.jpg",
    title: "Cardio Zone",
    description: "State-of-the-art cardio equipment",
    objectPosition: "50% 30%",
  },
  {
    id: 6,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rajeshhamalatgym-2IjqHMHU3yA5r6FdmEuxEllgQxrLAh.jpg",
    title: "Celebrity Rajesh Hamal at BobsGym",
    description: "Join our supportive fitness community",
    objectPosition: "center top",
  },
  {
    id: 7,
    image: "/images/boyshowoff.jpg",
    title: "Strength Showcase",
    description: "Confidence built through consistent training",
    objectPosition: "center top",
  },
  {
    id: 8,
    image: "/images/showcasingbody.jpg",
    title: "Body Transformation",
    description: "Visual proof of discipline and hard work",
    objectPosition: "center center",
  },
  {
    id: 9,
    image: "/images/yogaatgym.jpg",
    title: "Gym Yoga Session",
    description: "Blending flexibility and mindfulness in fitness",
    objectPosition: "top center",
  },
  {
    id: 10,
    image: "/images/flexiblityshowoff.jpg",
    title: "Flexibility Mastery",
    description: "Training the body for balance and control",
    objectPosition: "40% 50%",
  },
  {
    id: 11,
    image: "/images/playingwithropes.jpg",
    title: "Rope Workout",
    description: "Intense battle rope training for endurance",
    objectPosition: "center center",
  },
  {
    id: 12,
    image: "/images/cycling.jpg",
    title: "Indoor Cycling",
    description: "Boosting stamina through cardio cycling sessions",
    objectPosition: "center center",
  },
  {
    id: 13,
    image: "/images/workingout.jpg",
    title: "Focused Workout",
    description: "Dedication and form during strength training",
    objectPosition: "center top",
  },
  {
    id: 14,
    image: "/images/banner.jpg",
    title: "Gym Environment",
    description: "Modern facilities designed for peak performance",
    objectPosition: "50% 20%",
  },
];

export default function GalleryPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Gallery & <span className="text-red-600">Facilities</span>
            </h1>
            <p className="text-lg text-gray-400">
              Explore our state-of-the-art gym facilities and strong fitness
              community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl border border-gray-700 hover:border-red-600 transition-all duration-300 cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative w-full aspect-square overflow-hidden bg-gray-900">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ objectPosition: item.objectPosition }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-6 transition-all duration-300 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Watch more section */}
          <div className="mt-20 text-center">
            <p className="text-gray-400 mb-6 text-lg">
              Watch more transformations, training, and events on our
              <span className="text-red-600 font-semibold"> Instagram</span>.
            </p>
            <Link
              href="https://www.instagram.com/bobsgymlakecity"
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-red-800/40"
            >
              Watch More
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
