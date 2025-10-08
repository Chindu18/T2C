"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const heroImages = [
  {
    src: "/tandoori-grilled-chicken-tikka-with-charred-marks-.jpg",
    alt: "Tandoori Grilled Chicken",
    title: "Tandoori Chicken",
  },
  {
    src: "/south-indian-meals-thali-with-rice-sambar-rasam-ve.jpg",
    alt: "South Indian Meals",
    title: "Traditional Meals",
  },
  {
    src: "/goan-fish-curry-with-coconut-milk-and-traditional-.jpg",
    alt: "Goan Fish Curry",
    title: "Fish Curry",
  },
  {
    src: "/masala-dosa-with-potato-filling-coconut-chutney-an.jpg",
    alt: "Masala Dosa",
    title: "Masala Dosa",
  },
  {
    src: "/chettinad-chicken-curry-with-roasted-spices-and-cu.jpg",
    alt: "Chennai Chicken",
    title: "Chennai Chicken",
  },
  {
    src: "/mutton-roganjosh-with-aromatic-kashmiri-spices-and.jpg",
    alt: "Mutton Roganjosh",
    title: "Mutton Roganjosh",
  },
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1))
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 peacock-pattern opacity-30"></div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-8">
              <div className="mb-4">
                <span className="inline-block text-6xl md:text-8xl mt-[90px] text-5xl font-bold text-primary mb-4 tamil-text drop-shadow-lg lg:text-7xl xl:text-8xl">
                  வணக்கம்
                </span>
              </div>

              <span className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-lg font-medium mb-6 border border-primary/20 font-bold">
                T2C From the Hearts of South India
              </span>

              <p className="text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed font-light">
                {
                  "Experience the authentic flavors of Chennai in the heart of Sweden. Where every dish tells a story of tradition, love, and the warmth of Tamil hospitality."
                }
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:flex justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group text-lg px-8 py-4"
                onClick={() => scrollToSection("menu")}
              >
                Explore Our Menu
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 bg-transparent"
                onClick={() => scrollToSection("booking-form")}
              >
                Book Your Table
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kaplansgatan 1, Södertalje</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon-Thu: 11:00-20:00</span>
              </div>
            </div>
          </div>

          <div className="relative lg:order-last animate-fade-in-up">
            <div className="relative w-full mt-12 h-[500px]md:h-[500px] mt-10 lg:h-[500px] mt-[70px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImages[currentImageIndex].src || "/placeholder.svg"}
                alt={heroImages[currentImageIndex].alt}
                fill
                className="object-cover transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Image Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                  <h3 className="text-white font-semibold text-lg">{heroImages[currentImageIndex].title}</h3>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
