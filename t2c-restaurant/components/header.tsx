"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "/menu", isLink: true },
    { name: "Specials", href: "#specials" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gradient-to-r   backdrop-blur-md shadow-lg transition-colors duration-300"
      : "bg-transparent transition-colors duration-300"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-15 h-15">
              <Image src="/images/logo.png" alt="T2C Logo" fill className="rounded-full object-contain shadow-xl shadow-black" priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isLink ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 text-2xl font-bold"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ),
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
              <Phone className="w-4 h-4" />
              <span>+46 760851116</span>
            </Button>
            <Button className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection("#booking-form")}>
              Book Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="py-4 space-y-2">
              {navItems.map((item) =>
                item.isLink ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ),
              )}
              <div className="px-4 pt-4 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2 bg-transparent"
                >
                  <Phone className="w-4 h-4" />
                  <span>+46 760851116</span>
                </Button>
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection("#booking-form")}
                >
                  Book Table
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
