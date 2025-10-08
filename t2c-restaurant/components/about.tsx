import { Card } from "@/components/ui/card"
import { Heart, Users, Award, Utensils } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with the same love and care as in a Tamil home kitchen",
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "Recipes passed down through generations, bringing authentic Chennai flavors to Sweden",
    },
    {
      icon: Award,
      title: "Authentic Spices",
      description: "Imported spices from South India ensure every bite is a journey to Chennai",
    },
    {
      icon: Utensils,
      title: "Traditional Methods",
      description: "Cooked using time-honored techniques that preserve the essence of Tamil cuisine",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Feel at Home with
            <span className="text-primary block">Authentic Chennai Flavors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {
              "From the bustling streets of Chennai to the serene landscapes of Sweden, T2C brings you the soul of Tamil cuisine. Every dish is a poem of flavors, every meal a celebration of our rich heritage."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-card/50 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-3xl font-bold text-foreground mb-4">{"Challenge Your Taste Buds"}</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {
              "Get not only your tummy full, but also your hearts with a lot of memories with your loved ones. Experience the warmth of Tamil hospitality in every bite."
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary font-medium">
            <span className="px-4 py-2 bg-primary/10 rounded-full">Authentic Recipes</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Fresh Ingredients</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Traditional Cooking</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Family Atmosphere</span>
          </div>
        </div>
      </div>
    </section>
  )
}
