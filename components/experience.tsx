"use client";

import Image from "next/image";

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moremachines-jbRhtXjlhvTamVRAL6xVkH9qeCblqV.jpg",
    alt: "Machines and Equipment",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boysgirlsbodyshowoff-z7gnWO3BTAkPnm60h8XCFs1cN6rdFp.jpg",
    alt: "Gym Community",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/machines3-pCkfyWWi7TPTwrOlZL1Sp6LHSpJqOy.jpg",
    alt: "Cardio Equipment",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/weightedsquats-yvD9Ucb3g6rl0UYo6z4f5dt8P5sUJD.jpg",
    alt: "Strength Training",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardio-jgXBwPA2tHz3DVtomuvnx9XzZsDrSJ.jpg",
    alt: "Treadmills",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benchpressimage-vfqLiIACr6mwKePe83Q72VOjG0DQBf.jpg",
    alt: "Bench Press",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moremachinesatgym-46Toa1yipNbHoF2wuXgYJvUkD8inJX.jpg",
    alt: "Full Gym View",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/machines5-QkI7euqllPnWu4rMOTfcAb8UC26z2x.jpg",
    alt: "Dumbbells Area",
  },
];

const duplicatedImages = [...images, ...images];

export function Experience() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Experience Our Gym
          </h2>
          <p className="text-xl text-muted-foreground">
            Continuously scrolling gallery of our equipment
          </p>
        </div>

        {/* Infinite Horizontal Scroll */}
        <style>{`
          @keyframes scroll-right {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 8px)); }
          }
          .scrolling-gallery {
            animation: scroll-right 30s linear infinite;
          }
          .scrolling-gallery:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="relative overflow-hidden bg-muted rounded-2xl p-4">
          <div className="flex gap-4 scrolling-gallery">
            {duplicatedImages.map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-6">
          Hover to pause the gallery
        </p>
      </div>
    </section>
  );
}
