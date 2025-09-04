import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, User } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">C</span>
          </div>
          <span className="text-xl font-bold text-primary">Cooksie</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#feed" className="text-sm font-medium hover:text-primary transition-colors">
            Discover
          </a>
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            How it Works
          </a>
          <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">
            Community
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button className="hidden sm:inline-flex">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
