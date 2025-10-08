"use client";
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"


const menuCategories = [
  {
    title: "Starters • Non‑Veg",
    items: [
      {
        name: "Chicken 65",
        price: "89 SEK",
        description: "Crispy fried chicken with curry leaves & chilies.",
        image: "/chicken65.webp",
      },
      {
        name: "Chicken Lollipop (6 pcs)",
        price: "99 SEK",
        description: "Frenched wings, deep‑fried and tossed in spicy sauce.",
        image: "/chickenlolipop.webp",
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
        name: "Chicken Samosa (2 pcs)",
        price: "75 SEK",
        description: "Crispy pastry filled with spiced chicken.",
        image: "/samosa2.jpg",
      },
      {
        name: "Omelet",
        price: "55 SEK",
        description: "Masala omelet with onions, chilies & herbs.",
        image: "/omletter.webp",
      },
      {
        name: "Kalakk i (Egg)",
        price: "55 SEK",
        description: "Tamil‑style egg kalakki (soft scrambled).",
        image: "/kalaki.jpg",
      },
    ],
  },
  {
    title: "Starters • Vegetarian",
    items: [
      {
        name: "Gobi 65",
        price: "79 SEK",
        description: "Crispy cauliflower fritters, spice‑tossed.",
        image: "/gobi-65-cauliflower-fritters.jpg.jpg",
      },
      {
        name: "Vadai (4 pcs)",
        price: "89 SEK",
        description: "Crispy South Indian lentil doughnuts.",
        image: "/medu-vada-with-coconut-chutney.jpg",
      },
      {
        name: "Veg Samosa (2 pcs)",
        price: "65 SEK",
        description: "Classic potato‑pea samosas.",
        image: "/veg-samosa-indian-appetizer.jpg",
      },
      {
        name: "Onion Pakoda",
        price: "65 SEK",
        description: "Crispy onion fritters with masalas.",
        image: "/onionpakoda.jpg",
      },
    ],
  },
  {
    title: "Mains • Non‑Veg",
    items: [
      {
        name: "T2C Tandoori Chicken (Full)",
        price: "169 SEK",
        description: "Clay‑oven roasted chicken, yogurt masala.",
        image: "/tandoori.jpg",
      },
      {
        name: "T2C Pepper Chicken (Boneless)",
        price: "159 SEK",
        description: "Fiery black pepper chicken, Tamil style.",
        image: "/pepperchicken.jpg",
      },
      {
        name: "Chicken Tikka",
        price: "149 SEK",
        description: "Char‑grilled chicken tikka pieces.",
        image: "/chickentikka.jpg",
      },
      {
        name: "Chicken Vindaloo",
        price: "149 SEK",
        description: "Goa‑inspired tangy & spicy curry.",
        image: "/chickenvindalo.jpg",
      },
      {
        name: "T2C Special Chicken Masala",
        price: "159 SEK",
        description: "House special rich chicken masala.",
        image: "/chicken_curry.jpg",
      },
      {
        name: "T2C Mutton Sukka",
        price: "169 SEK",
        description: "Dry‑roasted mutton with spices & coconut.",
        image: "/muttonchukka.webp",
      },
      {
        name: "Lamb Vindaloo",
        price: "169 SEK",
        description: "Spicy & tangy lamb curry.",
        image: "/lambvindaloo.jpg",
      },
    ],
  },
  {
    title: "Mains • Vegetarian",
    items: [
      {
        name: "Palak Paneer",
        price: "109 SEK",
        description: "Creamy spinach gravy with paneer.",
        image: "/palakpaneer.jpg",
      },
      {
        name: "Paneer Butter Masala",
        price: "109 SEK",
        description: "Rich, creamy tomato gravy with paneer.",
        image: "/paneerbuttermasala.jpg",
      },
      {
        name: "Dal Makhani",
        price: "89 SEK",
        description: "Slow‑cooked creamy black lentils.",
        image: "/dalmakani.webp",
      },
      {
        name: "Okra Curry",
        price: "89 SEK",
        description: "Bhindi in tangy tomato‑onion masala.",
        image: "/okracurry.webp",
      },
      {
        name: "Vatha Kulambu",
        price: "89 SEK",
        description: "Traditional tamarind‑based Tamil curry.",
        image: "/vathakulambu.jpg",
      },
    ],
  },
  {
    title: "Biryani & Rice",
    items: [
      {
        name: "Chicken Dum Biryani",
        price: "149 SEK",
        description: "Layered basmati rice with spiced chicken.",
        image: "/biriyani.jpg",
      },
      {
        name: "Veg Biryani",
        price: "129 SEK",
        description: "Aromatic basmati with mixed vegetables.",
        image: "/vegbiriyani.jpg",
      },
      {
        name: "T2C Special Prawn Biryani",
        price: "159 SEK",
        description: "Fragrant rice with spiced prawns.",
        image: "/prawnbiriyani.webp",
      },
    ],
  },
  {
    title: "Dosa & Uthappam",
    items: [
      {
        name: "Plain Dosa",
        price: "89 SEK",
        description: "Crisp rice crepe with chutney & sambar.",
        image: "/plaindosa.jpg",
      },
      {
        name: "Masala Dosa",
        price: "109 SEK",
        description: "Dosa with spiced potato filling.",
        image: "/masaladosa.jpg",
      },
      {
        name: "Ghee Roast",
        price: "99 SEK",
        description: "Crispy ghee‑brushed dosa.",
        image: "/ghee rost.png",
      },
      {
        name: "Podi Dosa",
        price: "99 SEK",
        description: "Dosa sprinkled with spicy podi.",
        image: "/podi-dosa.jpg",
      },
      {
        name: "Chicken Curry Dosa",
        price: "119 SEK",
        description: "Dosa topped with spicy chicken curry.",
        image: "/chickendosa.png",
      },
      {
        name: "Special Uthappam (Customizable)",
        price: "103 SEK",
        description: "Thick rice pancake with toppings.",
        image: "/uthappam-special.jpg",
      },
    ],
  },
  {
    title: "Kothu Parotta",
    items: [
      {
        name: "Chicken Kothu Parotta",
        price: "135 SEK",
        description: "Shredded parotta tossed with chicken & masala.",
        image: "/kothuparotta.jpg",
      },
      {
        name: "Lamb Kothu Parotta",
        price: "159 SEK",
        description: "Shredded parotta tossed with lamb & masala.",
        image: "/lambkothuparato.JPG",
      },
    ],
  },
  {
    title: "Snacks & Wraps",
    items: [
      {
        name: "T2C Special Shawarma",
        price: "99 SEK",
        description: "House special shawarma wrap.",
        image: "/shawarma.jpg",
      },
    ],
  },
  {
    title: "Breads",
    items: [
      {
        name: "Tandoori Roti (per pc)",
        price: "25 SEK",
        description: "Whole wheat flatbread from tandoor.",
        image: "/tandooriroti.jpg",
      },
      {
        name: "Naan (per pc)",
        price: "25 SEK",
        description: "Soft, fluffy white flour naan.",
        image: "/naan.jpg",
      },
      {
        name: "Garlic Naan (per pc)",
        price: "35 SEK",
        description: "Naan brushed with garlic butter.",
        image: "/garlic naan.webp",
      },
    ],
  },
  {
    title: "Soups",
    items: [
      {
        name: "Cream Soup",
        price: "69 SEK",
        description: "Chef’s creamy soup of the day.",
        image: "/creamsoup.jpg",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Masala Chai (Hot)",
        price: "45 SEK",
        description: "Spiced Indian tea with milk.",
        image: "/masalatea.jpg",
      },
      {
        name: "Chennai Coffee (Hot)",
        price: "45 SEK",
        description: "South Indian filter coffee.",
        image: "/cofee.webp",
      },
      {
        name: "Badam Milk (Cold)",
        price: "56 SEK",
        description: "Chilled almond milk with saffron.",
        image: "/badammilk.jpg",
      },
      {
        name: "Mango Lassi (Cold)",
        price: "49 SEK",
        description: "Refreshing mango yogurt drink.",
        image: "/mangolassi.jpg",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Gulab Jamun (Hot)",
        price: "59 SEK",
        description: "Warm syrup‑soaked dumplings.",
        image: "/gulabjamun.webp",
      },
      {
        name: "Gulab Jamun with Ice Cream",
        price: "69 SEK",
        description: "Gulab jamun served with ice cream.",
        image: "/gulabjamunicecream.webp",
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Complete Menu
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our <span className="text-primary">Chennai</span> Menu
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Explore our Veg and Non‑Veg favorites, dosa delights, biryani, breads, drinks, and desserts — crafted with
              authentic South Indian flavors.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                {category.title}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 bg-card/50 backdrop-blur-sm"
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.image || "/placeholder.svg?height=200&width=300&query=indian food"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">{item.price}</Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


        {/* for pdf download */}
      <section className="flex justify-center items-center pb-20">
       <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/pdf/T2C_Menu.pdf"; 
            link.download = "T2C_Menu.pdf";
            link.click();
          }}
          className="bg-[#004b00] text-white px-5 py-2 rounded-lg font-medium
               shadow-lg shadow-black/50
               hover:bg-[#004b00] cursor-pointer hover:shadow-xl hover:shadow-black/70 hover:scale-105
               active:scale-95 transition-all duration-300"
        >
          Download Menu
      </button>

      </section>

      {/* Tamil Thank You */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-4 tamil-text">நன்றி</h2>
          <p className="text-xl text-muted-foreground">Thank you for exploring our menu</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
