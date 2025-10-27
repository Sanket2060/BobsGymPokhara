import Header from "@/components/header"
import Footer from "@/components/footer"
import Services from "@/components/services"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About BobsGym</h1>
            <p className="text-xl text-muted-foreground">Your premier fitness destination in Lakecity, Pokhara</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                At BobsGym, we believe that fitness is not just about physical transformation—it's about building a
                community of motivated individuals who support each other on their wellness journey.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Our mission is to provide world-class facilities, expert guidance, and an inspiring environment where
                everyone can achieve their fitness goals, regardless of their starting point.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                {[
                  "State-of-the-art equipment and facilities",
                  "Expert certified trainers",
                  "Premium steam and sauna facilities",
                  "Diverse group classes",
                  "Personalized training programs",
                  "Supportive fitness community",
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground/80">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Services />
        </section>
      </div>
      <Footer />
    </main>
  )
}
