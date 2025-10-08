"use client"

import Image from "next/image"
import { FacebookIcon, InstagramIcon } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-16 h-16">
                <Image src="/images/t2c-logo.png" alt="T2C Logo" fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">T2C</h3>
                <p className="text-sm opacity-80">The Chennai Cuisine</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4 max-w-md">{"T2C From the Hearts of South India"}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <FacebookIcon className="w-7 h-7 md:w-8 md:h-8" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <InstagramIcon className="w-7 h-7 md:w-8 md:h-8" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("#home")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  About Us
                </button>
              </li>
              <li>
                <a href="/menu" className="opacity-80 hover:opacity-100 transition-opacity">
                  Menu
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#specials")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Specials
                </button>
              </li>
              {/* 
              <li>
                <button
                  onClick={() => scrollToSection("#gallery")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Gallery
                </button>
              </li>
              */}
              <li>
                <button
                  onClick={() => scrollToSection("#booking-form")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Book Table
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="opacity-60">📍</span>
                <div className="opacity-80">
                  <p>Kaplansgatan 1</p>
                  <p>15172, Södertalje</p>
                  <p>Sweden</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="opacity-60">📞</span>
                <span className="opacity-80">+46 (0) 760851116</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="opacity-60">✉️</span>
                <span className="opacity-80">t2c.eats@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">© 2025 T2C - The Chennai Cuisine. All rights reserved.</p>
            <p className="text-sm opacity-80">{"Developed by Wrench Wise Technologies"}</p>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-primary-foreground/20">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-2 tamil-text">நன்றி</h2>
            <p className="text-sm opacity-80">Thank you for choosing T2C - The Chennai Cuisine</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
