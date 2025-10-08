"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export function Contact() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kaplansgatan 1", "15172, Södertalje", "Sweden"],
      action: "Get Directions",
      onClick: () => window.open("https://maps.google.com/?q=Kaplansgatan+1,+15172+Södertalje,+Sweden", "_blank"),
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+46 (0) 760851116"],
      action: "Call Now",
      onClick: () => window.open("tel:+46760851116", "_self"),
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["t2c.eats@gmail.com"],
      action: "Send Email",
      onClick: () => window.open("mailto:t2c.eats@gmail.com", "_self"),
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon - Thu: 11:00 - 20:00", "Fri - Sun: 12:00 - 21:00"],
      action: "Book Table",
      onClick: scrollToBooking,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Visit Us for an
            <span className="text-primary block">Unforgettable Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {
              "We're located in the heart of Södertalje, ready to welcome you with warm hospitality and authentic Chennai flavors."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-card/50 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{info.title}</h3>
              <div className="space-y-1 mb-4">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent" onClick={info.onClick}>
                {info.action}
              </Button>
            </Card>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-muted rounded-2xl p-8 text-center">
          <div className="bg-primary/5 rounded-lg p-12 mb-6">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Find Us Easily</h3>
            <p className="text-muted-foreground mb-4">
              Located in the heart of Södertalje, easily accessible by public transport and car
            </p>
            <Button
              className="bg-primary hover:bg-primary/90"
              onClick={() =>
                window.open("https://maps.google.com/?q=Kaplansgatan+1,+15172+Södertalje,+Sweden", "_blank")
              }
            >
              Open in Google Maps
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-2">🚗 By Car</h4>
              <p className="text-muted-foreground">Free parking available nearby</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">🚌 Public Transport</h4>
              <p className="text-muted-foreground">Bus stop 2 minutes walk</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">🚶 Walking</h4>
              <p className="text-muted-foreground">City center location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
