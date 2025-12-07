"use client";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Dumbbell,
  Users,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If you want to join us, call us or visit us at our location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto animate-slideInLeft ">
          {/* Location Card */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary/20 mb-4">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">Lakecity, Pokhara, Nepal</p>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary/20 mb-4">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
            <div className="space-y-1">
              <p className="text-muted-foreground">061-452333</p>
              <p className="text-muted-foreground">9805827792</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary/20 mb-4">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">info@bobsgym.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeInUp mt-8">
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3319.2434650444575!2d83.9619413!3d28.2040026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595004784e53f%3A0xc573154f3276293d!2sBobsGym%20Pokhara!0!3m2!1sen!2snp!4v1762079548063!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-between bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Why Choose BobsGym?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're more than just a gym — we're a community focused on your
                strength, health, and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    Open 7 Days a Week
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Flexible hours to match your schedule.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Dumbbell className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    Modern Equipment
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Train with top-tier machines and gear.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    Certified Trainers
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Personalized guidance for every fitness goal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Send className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    Join the Community
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Be part of Pokhara's most energetic fitness family.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-border flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.google.com/maps?ll=28.204378,83.964582&z=16&t=m&hl=en&gl=NP&mapclient=embed&cid=14227739077686733117"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-center hover:bg-primary/90 transition-all duration-300"
              >
                Visit Us
              </a>
              <a
                href="https://www.google.com/maps?ll=28.204378,83.964582&z=16&t=m&hl=en&gl=NP&mapclient=embed&cid=14227739077686733117"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-card border border-primary text-primary rounded-lg font-semibold text-center hover:bg-primary/10 transition-all duration-300"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
