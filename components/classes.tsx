"use client";

import Image from "next/image";

const classes = [
  {
    name: "Personal Training",
    description:
      "One-on-one coaching tailored to your specific fitness goals and needs",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trainer_krishnaguru-PfFWiANu0D9x1kTbrv17nJVtqshCVL.jpg",
    schedule: "Flexible - Book Your Session",
    objectPosition: "object-[50%_20%]",
  },
  {
    name: "CrossFit Classes",
    description:
      "High-intensity functional training combining weightlifting, gymnastics, and cardio",
    image: "/images/crossfitclasses.jpg",
    schedule: "",
    objectPosition: "object-center",
  },
  {
    name: "Weight-Loss Program",
    description:
      "Comprehensive program combining cardio, strength training, and nutrition guidance",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/girlperformingcardio-fZs2Hoz2ZK3UBuX8hG5woIcVAFEjeP.jpg",
    schedule: "",
    objectPosition: "object-center",
  },
  {
    name: "Mass-Building Program",
    description:
      "Specialized program for muscle gain with progressive strength training",
    image: "/images/massbuilding.jpg",
    schedule: "",
    objectPosition: "object-center",
  },
];

export default function Classes() {
  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized training programs designed for your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-border hover:border-primary transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={cls.image || "/placeholder.svg"}
                  alt={cls.name}
                  fill
                  className={`object-cover ${cls.objectPosition} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {cls.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {cls.description}
                </p>
                <p className="text-sm text-primary font-semibold">
                  {cls.schedule}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
