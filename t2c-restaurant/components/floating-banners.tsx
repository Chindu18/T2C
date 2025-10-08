"use client"

import { useState, useEffect } from "react"
import { X, Gift, Users, Utensils, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const banners = [
  {
    id: 1,
    icon: Gift,
    title: "Weekend Buffets",
    message: "Special affordable prices for unlimited authentic flavors!",
    color: "bg-accent",
  },
  {
    id: 2,
    icon: Users,
    title: "Party Bookings",
    message: "Book for a party and pay only for food, not for place!",
    color: "bg-primary",
  },
  {
    id: 3,
    icon: Utensils,
    title: "Corporate Lunch",
    message: "Special discounts for team lunch delivery!",
    color: "bg-secondary",
  },
  {
    id: 4,
    icon: Music,
    title: "Karaoke Nights",
    message: "Enjoy karaoke nights on special weekends!",
    color: "bg-accent",
  },
]

export function FloatingBanners() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    if (!hasShown) {
      const timer = setTimeout(() => {
        setHasShown(true)
      }, 3000) // Show after 3 seconds
      return () => clearTimeout(timer)
    }
  }, [hasShown])

  useEffect(() => {
    if (hasShown && isVisible) {
      const interval = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length)
      }, 5000) // Change banner every 5 seconds
      return () => clearInterval(interval)
    }
  }, [hasShown, isVisible])

  if (!hasShown || !isVisible) return null

  const banner = banners[currentBanner]
  const Icon = banner.icon

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <Card className={`${banner.color} text-white p-4 max-w-sm shadow-lg border-0`}>
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm mb-1">{banner.title}</h4>
            <p className="text-xs opacity-90 leading-relaxed">{banner.message}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="flex-shrink-0 h-6 w-6 p-0 text-white hover:bg-white/20"
            onClick={() => setIsVisible(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex space-x-1">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentBanner ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 text-xs px-3 py-1 h-auto">
            Learn More
          </Button>
        </div>
      </Card>
    </div>
  )
}
