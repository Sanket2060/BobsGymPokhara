"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "1 Month Pass",
      duration: "1 Month",
      price: "₹2,999",
      description: "Perfect for trying out our gym",
      features: [
        "Unlimited gym access",
        "All equipment access",
        "Locker facility",
        "Steam & Sauna access",
        "Basic fitness assessment",
      ],
    },
    {
      name: "3 Month Pass",
      duration: "3 Months",
      price: "₹7,999",
      description: "Great for building momentum",
      features: [
        "Unlimited gym access",
        "All equipment access",
        "Locker facility",
        "Steam & Sauna access",
        "Monthly fitness assessment",
        "1 free personal training session",
        "Nutrition consultation",
      ],
      highlighted: true,
    },
    {
      name: "Annual Pass",
      duration: "12 Months",
      price: "₹24,999",
      description: "Best value for committed fitness",
      features: [
        "Unlimited gym access",
        "All equipment access",
        "Premium locker facility",
        "Steam & Sauna access",
        "Quarterly fitness assessment",
        "4 free personal training sessions",
        "Monthly nutrition consultation",
        "Priority class booking",
        "Guest passes (4 per month)",
      ],
    },
  ]

  const dayPasses = [
    { days: "5 Days", price: "₹999", description: "Flexible weekly access" },
    { days: "10 Days", price: "₹1,799", description: "Extended access" },
    { days: "15 Days", price: "₹2,499", description: "Half month pass" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Flexible Membership Plans</h1>
            <p className="text-xl text-muted-foreground">Choose the perfect plan that fits your fitness journey</p>
          </div>

          {/* Monthly Plans */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Monthly Memberships</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden flex flex-col ${
                    plan.highlighted
                      ? "border-primary bg-card shadow-lg shadow-primary/20 md:scale-105"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="bg-primary text-primary-foreground py-2 text-center font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">/{plan.duration}</span>
                    </div>
                    <div className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        plan.highlighted
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-card border border-primary text-primary hover:bg-primary/10"
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day Passes */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Day Passes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dayPasses.map((pass, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 p-8 text-center flex flex-col"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pass.days}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{pass.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">{pass.price}</span>
                  </div>
                  <button className="w-full py-3 rounded-lg font-semibold bg-card border border-primary text-primary hover:bg-primary/10 transition-all duration-300">
                    Purchase Pass
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities Section */}
          <div className="mt-16 bg-card rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Premium Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "State-of-the-art Equipment", desc: "Latest fitness machines and free weights" },
                { title: "Steam & Sauna", desc: "Relax and recover after intense workouts" },
                { title: "Personal Training", desc: "Expert trainers for customized programs" },
                { title: "Group Classes", desc: "Yoga, CrossFit, Zumba, and more" },
              ].map((facility, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="font-bold text-foreground mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground">{facility.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
