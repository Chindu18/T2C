"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const menuCategories = [
  { id: "veg", name: "Vegetarian", icon: "🌱" },
  { id: "nonveg", name: "Non‑Vegetarian", icon: "🍖" },
]

const menuItems = {
  veg: [
    {
      name: "Gobi 65",
      price: "79 SEK",
      description: "Crispy cauliflower fritters tossed with South Indian spices.",
      image: "/gobi-65-cauliflower-fritters.jpg",
      vegetarian: true,
      popular: true,
    },
    {
      name: "Vadai (4 pcs)",
      price: "89 SEK",
      description: "Crispy South Indian lentil doughnuts with chutney.",
      image: "/medu-vada-with-coconut-chutney.jpg",
      vegetarian: true,
    },
    {
      name: "Veg Samosa (2 pcs)",
      price: "65 SEK",
      description: "Classic potato-pea samosas served with chutney.",
      image: "/veg-samosa-indian-appetizer.jpg",
      vegetarian: true,
    },
    {
      name: "Onion Pakoda",
      price: "65 SEK",
      description: "Crispy onion fritters with aromatic spices.",
      image: "/onionpakoda.jpg",
      vegetarian: true,
    },
    {
      name: "Palak Paneer",
      price: "109 SEK",
      description: "Creamy spinach gravy with cottage cheese.",
      image: "/palakpaneer.jpg",
      vegetarian: true,
    },
    {
      name: "Paneer Butter Masala",
      price: "109 SEK",
      description: "Rich, creamy tomato gravy with paneer.",
      image: "/paneerbuttermasala.jpg",
      vegetarian: true,
    },
  ],
  nonveg: [
    {
      name: "Chicken 65",
      price: "89 SEK",
      description: "Crispy fried chicken with curry leaves and chilies.",
      image: "/chicken-65-crispy-fried-chicken-with-curry-leaves.jpg",
      spicy: true,
      popular: true,
    },
    {
      name: "Chicken Lollipop (6 pcs)",
      price: "99 SEK",
      description: "Frenched wings, deep-fried and tossed in spicy sauce.",
      image: "/chickenlolipop.jpg",
      spicy: true,
    },
    {
      name: "Fish Tawa Fry",
      price: "129 SEK",
      description: "Seared fish with traditional Tamil spices.",
      image: "/fishtawafry.jpg",
    },
    {
      name: "Prawn 65",
      price: "99 SEK",
      description: "Juicy prawns fried with South Indian spices.",
      image: "/prawnfry.jpg",
    },
    {
      name: "Tandoori Chicken (Full)",
      price: "169 SEK",
      description: "Clay-oven roasted chicken with yogurt masala.",
      image: "/tandoori.jpg",
      signature: true,
    },
    {
      name: "Chicken Dum Biryani",
      price: "149 SEK",
      description: "Fragrant basmati rice layered with spiced chicken.",
      image: "/hyderabad-chicken-biryani-with-saffron-and-spices.jpg",
    },
  ],
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("veg")

  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Veg & Non‑Veg <span className="text-primary block">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {
              "From street‑style starters to soulful curries, explore our South Indian favorites crafted fresh every day."
            }
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center space-x-2"
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 bg-card/50 backdrop-blur-sm"
            >
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.popular && <Badge className="bg-accent text-accent-foreground">Popular</Badge>}
                  {item.signature && <Badge className="bg-primary text-primary-foreground">T2C Special</Badge>}
                  {item.spicy && <Badge variant="destructive">🌶️ Spicy</Badge>}
                  {item.vegetarian && <Badge className="bg-green-100 text-green-800">🌱 Veg</Badge>}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="font-bold">
                    {item.price}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{item.description}</p>
                <p className="text-xs text-primary italic mb-4">{item.ingredients}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/menu">
            <Button size="lg" variant="outline">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
