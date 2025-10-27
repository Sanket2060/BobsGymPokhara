import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import CelebrityVisits from "@/components/celebrity-visits"
import GoogleRating from "@/components/google-rating"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <CelebrityVisits />
      <GoogleRating />
      <Testimonials />
      <Footer />
    </main>
  )
}
