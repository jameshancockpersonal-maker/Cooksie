import { Card, CardContent } from "@/components/ui/card"
import { Play, ShoppingCart, Users, Trophy } from "lucide-react"

const features = [
  {
    icon: Play,
    title: "Watch & Learn",
    description: "Short, engaging cooking videos that make every recipe easy to follow",
  },
  {
    icon: ShoppingCart,
    title: "Instant Ingredients",
    description: "Tap 'Get Ingredients' and have everything delivered to your door",
  },
  {
    icon: Users,
    title: "Share Your Creations",
    description: "Post your dishes and connect with a community of food lovers",
  },
  {
    icon: Trophy,
    title: "Earn Rewards",
    description: "Complete cooking challenges and unlock badges as you level up",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-balance sm:text-4xl">How Cooksie Works</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">From discovery to dinner in just a few taps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
