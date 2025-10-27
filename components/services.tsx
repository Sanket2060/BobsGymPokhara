"use client"

import { Dumbbell, Zap, Users, Droplets, Flame, Wind } from "lucide-react"

const services = [
  {
    icon: Dumbbell,
    title: "GYM",
    description: "State-of-the-art equipment and facilities for all your strength training needs.",
  },
  {
    icon: Users,
    title: "FITNESS",
    description: "Comprehensive fitness programs designed to help you achieve your health goals.",
  },
  {
    icon: Zap,
    title: "CROSSFIT",
    description: "High-intensity functional training combining weightlifting, gymnastics, and cardio.",
  },
  {
    icon: Droplets,
    title: "SPA",
    description: "Relax and rejuvenate with our premium spa services and wellness treatments.",
  },
  {
    icon: Flame,
    title: "SAUNA",
    description: "Detoxify and recover with our traditional sauna facilities for muscle recovery.",
  },
  {
    icon: Wind,
    title: "STEAM",
    description: "Experience therapeutic steam therapy to relax muscles and improve circulation.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 bg-background rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
