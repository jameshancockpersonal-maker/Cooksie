"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Clock, ShoppingCart, Play } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface Recipe {
  id: number
  title: string
  creator: string
  avatar: string
  image: string
  cookTime: string
  difficulty: string
  likes: number
  ingredients: string[]
  price: string
}

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img
          src={recipe.image || "/placeholder.svg"}
          alt={recipe.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="sm" className="bg-white/90 text-black hover:bg-white">
            <Play className="h-4 w-4 mr-1" />
            Watch
          </Button>
        </div>
        <Badge className="absolute top-2 right-2 bg-background/90 text-foreground">{recipe.difficulty}</Badge>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <img src={recipe.avatar || "/placeholder.svg"} alt={recipe.creator} className="w-6 h-6 rounded-full" />
          <span className="text-sm text-muted-foreground">{recipe.creator}</span>
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-balance">{recipe.title}</h3>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            <span>{recipe.likes.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{recipe.price}</span>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" onClick={() => setIsLiked(!isLiked)}>
              <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Link href={`/recipe/${recipe.id}`}>
              <Button size="sm">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
