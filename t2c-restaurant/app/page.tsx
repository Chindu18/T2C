import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuSection } from "@/components/menu-section"
import { Specials } from "@/components/specials"
import { Contact } from "@/components/contact"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MenuSection />
      <Specials />
      <Contact />
      <BookingForm />
      <Footer />
    </main>
  )
}
