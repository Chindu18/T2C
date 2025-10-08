import Image from "next/image"
import { Card } from "@/components/ui/card"

export function Gallery() {
  const galleryImages = [
    {
      src: "/happy-customers-enjoying-indian-food-restaurant.jpg",
      alt: "Happy Customers Enjoying Food",
      title: "Joyful Dining",
    },
    {
      src: "/family-celebrating-with-indian-food-smiling.jpg",
      alt: "Family Celebrating",
      title: "Family Celebrations",
    },
    {
      src: "/couple-sharing-indian-meal-happy-faces.jpg",
      alt: "Couple Sharing Meal",
      title: "Romantic Dinners",
    },
    {
      src: "/friends-group-laughing-indian-restaurant.jpg",
      alt: "Friends Group Dining",
      title: "Friends Together",
    },
    {
      src: "/children-enjoying-indian-food-with-parents.jpg",
      alt: "Children Enjoying Food",
      title: "Family Time",
    },
    {
      src: "/customers-taking-selfie-with-indian-food.jpg",
      alt: "Customers Taking Selfie",
      title: "Happy Moments",
    },
    {
      src: "/elderly-couple-dining-indian-restaurant-smiling.jpg",
      alt: "Elderly Couple Dining",
      title: "Golden Years",
    },
    {
      src: "/business-lunch-indian-restaurant-professionals.jpg",
      alt: "Business Lunch",
      title: "Corporate Dining",
    },
    {
      src: "/birthday-celebration-indian-restaurant-cake.jpg",
      alt: "Birthday Celebration",
      title: "Special Occasions",
    },
  ]

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Happy Faces &<span className="text-primary block">Joyful Moments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {
              "See the smiles and joy our authentic Chennai cuisine brings to our customers. Every meal is a celebration of flavors and happiness."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm"
            >
              <div className="relative h-64 group">
                <Image
                  src={image.src || "/placeholder.svg?height=300&width=400&query=happy customers eating indian food"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-lg font-semibold text-white">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">{"Follow us on social media for more delicious moments"}</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              <span className="sr-only">Facebook</span>📘 Facebook
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              <span className="sr-only">Instagram</span>📷 Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
