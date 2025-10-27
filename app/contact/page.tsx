import Header from "@/components/header"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
