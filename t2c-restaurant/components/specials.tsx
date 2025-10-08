"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Utensils, FacebookIcon, InstagramIcon } from "lucide-react"

export function Specials() {
  const dailySpecials = [
    {
      day: "Monday",
      veg: "Alu Gobhi | Rice | Roti | Salad",
      nonVeg: "Pan Fried Fish Masala | Rice | Roti | Salad",
      price: "139 SEK",
      vegImage: "/aloo-gobi-curry-with-rice-thali.jpg",
      nonVegImage: "/fish-masala-curry-with-rice-thali.jpg",
    },
    {
      day: "Tuesday",
      veg: "Palak Paneer | Rice | Roti | Salad",
      nonVeg: "Kadai Chicken | Rice | Roti | Salad",
      price: "139 SEK",
      vegImage: "/palak-paneer-with-rice-thali.jpg",
      nonVegImage: "/kadai-chicken-with-rice-thali.jpg",
    },
    {
      day: "Wednesday",
      veg: "Dal Makhni | Rice | Roti | Salad",
      nonVeg: "Butter Chicken | Rice | Roti | Salad",
      price: "139 SEK",
      vegImage: "/dal-makhni-with-rice-thali.jpg",
      nonVegImage: "/butter-chicken-with-rice-thali.jpg",
    },
    {
      day: "Thursday",
      veg: "Mix Veg Curry | Rice | Roti | Salad",
      nonVeg: "Chicken Tikka Masala | Rice | Roti | Salad",
      price: "139 SEK",
      vegImage: "/mix-vegetable-curry-thali.jpg",
      nonVegImage: "/chicken-tikka-masala-thali.jpg",
    },
    {
      day: "Friday",
      veg: "Mushroom Masala | Rice | Roti | Salad",
      nonVeg: "Chennai Chicken Curry | Rice | Roti | Salad",
      price: "139 SEK",
      vegImage: "/mushroom-masala-curry-thali.jpg",
      nonVegImage: "/chettinad-chicken-curry-thali.jpg",
    },
  ]

  const offers = [
    {
      title: "Weekend Buffets",
      description: "Special affordable prices for unlimited authentic Chennai flavors",
      icon: Utensils,
      highlight: "Friday - Sunday",
    },
    {
      title: "Party Bookings",
      description: "Book for a party and pay only for food, not for the place",
      icon: Users,
      highlight: "Free Venue",
    },
    {
      title: "Corporate Lunch",
      description: "Regular lunch delivery for your team with special discounts",
      icon: Clock,
      highlight: "Weekdays",
    },
    {
      title: "Karaoke Nights",
      description: "Enjoy karaoke nights on special weekends with great food",
      icon: Calendar,
      highlight: "Special Weekends",
    },
  ]

  const scrollToBooking = () => {
    const element = document.getElementById("booking-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="specials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Specials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Daily Delights &<span className="text-primary block">Special Offers</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-pretty leading-relaxed font-semibold text-primary">
            {"Exclusive offers and weekend celebrations — follow us to never miss a deal."}
          </p>
          <div className="mt-6">
            <p className="text-sm text-muted-foreground">{"Follow us on social media for exclusive special offers:"}</p>
            <div className="flex justify-center gap-5 mt-3">
              <a href="#" aria-label="Facebook" className="text-primary hover:text-primary/80 transition-colors">
                <FacebookIcon className="w-7 h-7 md:w-8 md:h-8" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" aria-label="Instagram" className="text-primary hover:text-primary/80 transition-colors">
                <InstagramIcon className="w-7 h-7 md:w-8 md:h-8" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div>
          <h3 className="font-serif text-3xl font-bold text-center text-foreground mb-8">Special Offers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-card/50 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <offer.icon className="w-8 h-8 text-primary" />
                </div>
                <Badge className="mb-3 bg-accent text-accent-foreground">{offer.highlight}</Badge>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-3">{offer.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{offer.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={scrollToBooking}>
            Book Your Special Experience
          </Button>
        </div>
      </div>
    </section>
  )
}
