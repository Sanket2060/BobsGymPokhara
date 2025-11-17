"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Prabin P.",
    role: "Fitness Enthusiast",
    content:
      "BobsGym Pokhara is hands down one of the best gyms in the city! 💪The equipment is top-notch — clean, well-maintained, and covers everything from strength training to cardio. The trainers here are super friendly, professional, and always ready to guide you with the right form or a great workout plan.",
    rating: 5,
  },
  {
    name: "John Newvenn",
    role: "Traveller",
    content:
      "Bob’s Gym stands out in Pokhara. The machines are fully functional, well maintained, and the space stays clean with good ventilation. It covers weight, cardio, and flexibility training without crowding issues. The trainers, including Krishna, are experienced and effective.",
    rating: 5,
  },
  {
    name: "Reeya Rae",
    role: "Busy Professional",
    content:
      "this is my first gym ever and i am loving them i am here to gain weight and i am improving myself(Good gym, neat and clean and have good communication)",
    rating: 4.8,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Our Members <span className="text-primary">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who transformed their lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fadeInUp flex flex-col justify-between"
              style={{ animationDelay: `${index * 100}ms`, minHeight: "360px" }}
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="w-6 h-6 text-primary flex-shrink-0" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonial.rating
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }
                      />
                    ))}
                  </div>
                </div>

                <p className="text-foreground mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>

              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
