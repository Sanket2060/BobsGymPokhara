import Header from "@/components/header"
import HeroSplit from "@/components/hero-split"
import Services from "@/components/services"
import CelebrityVisits from "@/components/celebrity-visits"
import GoogleRating from "@/components/google-rating"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSplit />
      <Services />
      <CelebrityVisits />
      <GoogleRating />
      <Testimonials />
      <Footer />
    </main>
  )
}
