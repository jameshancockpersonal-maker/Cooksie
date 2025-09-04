import { Button } from "@/components/ui/button"
import { Play, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Cook What You
            <span className="text-primary"> Love</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
            Discover amazing recipes through short videos, get ingredients delivered instantly, and share your cooking
            journey with a community that celebrates every dish.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Play className="mr-2 h-5 w-5" />
              Start Cooking
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Home Cooks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground">Dishes Made</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
