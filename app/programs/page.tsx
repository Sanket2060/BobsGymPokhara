"use client"

import Header from "@/components/header"
import Trainers from "@/components/trainers"
import Classes from "@/components/classes"
import Footer from "@/components/footer"

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <Trainers />
        <Classes />
      </div>
      <Footer />
    </main>
  )
}
