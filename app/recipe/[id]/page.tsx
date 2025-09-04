"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Clock, Users, ChefHat, ShoppingCart, Heart, Share2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Sample recipe data - in a real app this would come from an API
const recipeData = {
  1: {
    title: "15-Minute Avocado Toast Bowl",
    creator: "Sarah Chen",
    avatar: "/placeholder-b7m7o.png",
    image: "/placeholder-thvi3.png",
    cookTime: "15 min",
    servings: 2,
    difficulty: "Easy",
    likes: 2400,
    description:
      "A nutritious and delicious breakfast bowl that combines creamy avocado with perfectly toasted sourdough and fresh toppings.",
    ingredients: [
      "2 ripe avocados",
      "4 slices sourdough bread",
      "2 eggs",
      "1 cup cherry tomatoes, halved",
      "1/2 cup feta cheese, crumbled",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
    ],
    instructions: [
      "Toast the sourdough bread until golden brown",
      "Mash the avocados with salt, pepper, and a drizzle of olive oil",
      "Fry or poach the eggs to your preference",
      "Spread mashed avocado on toast",
      "Top with halved cherry tomatoes and crumbled feta",
      "Add the cooked egg on top",
      "Drizzle with olive oil and sprinkle with red pepper flakes",
      "Serve immediately and enjoy!",
    ],
    price: "$12.99",
    nutritionFacts: {
      calories: 420,
      protein: "18g",
      carbs: "32g",
      fat: "28g",
      fiber: "12g",
    },
  },
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const recipe = recipeData[1] // Using sample data for demo

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  const handleAddToCart = () => {
    setAddedToCart(true)
    // In a real app, this would add items to cart
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Feed
            </Button>
          </Link>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setIsLiked(!isLiked)}>
              <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recipe Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={recipe.image || "/placeholder.svg"}
                alt={recipe.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h1 className="text-2xl md:text-3xl font-bold text-balance">{recipe.title}</h1>
                <div className="flex items-center space-x-2 mt-2">
                  <img
                    src={recipe.avatar || "/placeholder.svg"}
                    alt={recipe.creator}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <span className="text-sm">by {recipe.creator}</span>
                </div>
              </div>
            </div>

            {/* Recipe Info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">{recipe.cookTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">{recipe.servings} servings</span>
              </div>
              <div className="flex items-center space-x-2">
                <ChefHat className="h-5 w-5 text-muted-foreground" />
                <Badge variant="secondary">{recipe.difficulty}</Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">{recipe.likes.toLocaleString()} likes</span>
              </div>
            </div>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-3">About This Recipe</h2>
                <p className="text-muted-foreground text-pretty">{recipe.description}</p>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Instructions</h2>
                <ol className="space-y-3">
                  {recipe.instructions.map((step, index) => (
                    <li key={index} className="flex space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-sm text-pretty">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Nutrition Facts */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Nutrition Facts</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{recipe.nutritionFacts.calories}</div>
                    <div className="text-sm text-muted-foreground">Calories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{recipe.nutritionFacts.protein}</div>
                    <div className="text-sm text-muted-foreground">Protein</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{recipe.nutritionFacts.carbs}</div>
                    <div className="text-sm text-muted-foreground">Carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{recipe.nutritionFacts.fat}</div>
                    <div className="text-sm text-muted-foreground">Fat</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{recipe.nutritionFacts.fiber}</div>
                    <div className="text-sm text-muted-foreground">Fiber</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ingredients & Purchase */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Ingredients</h2>
                  <div className="text-2xl font-bold text-primary">{recipe.price}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <Button className="w-full" size="lg" onClick={handleAddToCart} disabled={addedToCart}>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {addedToCart ? "Added to Cart!" : "Get All Ingredients"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Ingredients will be delivered within 2 hours via our grocery partners
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
