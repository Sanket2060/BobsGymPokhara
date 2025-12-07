"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "1 Month Pass",
      duration: "1 Month",
      price: "₹5,000",
      description: "Perfect for trying out our gym",
      features: ["Unlimited gym access", "All equipment access"],
    },
    {
      name: "3 Month Pass",
      duration: "3 Months",
      price: "₹14,500",
      description: "Great for building momentum",
      features: ["Unlimited gym access", "All equipment access"],
      highlighted: true,
    },
    {
      name: "Annual Pass",
      duration: "12 Months",
      price: "₹55,000",
      description: "Best value for committed fitness",
      features: ["Unlimited gym access", "All equipment access"],
    },
  ];

  const dayPasses = [
    { days: "1 Day", price: "₹800", description: "Try Bobs Gym" },
    { days: "7 Days", price: "₹3,500", description: "Flexible weekly access" },
    { days: "14 Days", price: "₹4,200", description: "Half month pass" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Flexible Membership Plans
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan that fits your fitness journey
            </p>
          </div>

          {/* Monthly Plans */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Monthly Memberships
            </h2>
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
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        /{plan.duration}
                      </span>
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
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Day Passes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dayPasses.map((pass, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 p-8 text-center flex flex-col"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {pass.days}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {pass.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">
                      {pass.price}
                    </span>
                  </div>
                  <button className="w-full py-3 rounded-lg font-semibold bg-card border border-primary text-primary hover:bg-primary/10 transition-all duration-300">
                    Purchase Pass
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-border">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Need More Details?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Have questions about our pricing or looking for a customized
                plan? Get in touch with our team and we'll help you find the
                perfect fit.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
