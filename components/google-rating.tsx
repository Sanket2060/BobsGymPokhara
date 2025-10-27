"use client"

import { Star } from "lucide-react"

export default function GoogleRating() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 animate-fadeInUp">
          {/* Left side - Google Logo and Rating */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-primary mb-2">4.9</div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
            </div>
            <div className="hidden md:block w-px h-24 bg-border" />
          </div>

          {/* Right side - Text and CTA */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Highly Rated on Google</h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of satisfied members who have transformed their fitness journey at BobsGym
            </p>
            <a
              href="https://maps.app.goo.gl/ThzMEMvMgfyrefqu9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              <Star size={18} />
              Rate us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
