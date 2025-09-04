import { RecipeCard } from "@/components/recipe-card"

const sampleRecipes = [
  {
    id: 1,
    title: "15-Minute Avocado Toast Bowl",
    creator: "Sarah Chen",
    avatar: "/young-asian-woman-chef-smiling-portrait.jpg",
    image: "/gourmet-avocado-toast-bowl-with-eggs-and-tomatoes-.jpg",
    cookTime: "15 min",
    difficulty: "Easy",
    likes: 2400,
    ingredients: [
      "2 ripe avocados",
      "4 slices sourdough bread",
      "2 eggs",
      "Cherry tomatoes",
      "Feta cheese",
      "Olive oil",
    ],
    price: "$12.99",
  },
  {
    id: 2,
    title: "Creamy Mushroom Risotto",
    creator: "Marco Italiano",
    avatar: "/middle-aged-italian-male-chef-with-mustache-smilin.jpg",
    image: "/creamy-mushroom-risotto-in-white-bowl-garnished-wi.jpg",
    cookTime: "35 min",
    difficulty: "Medium",
    likes: 3200,
    ingredients: ["Arborio rice", "Mixed mushrooms", "Vegetable broth", "Parmesan cheese", "White wine", "Onion"],
    price: "$18.50",
  },
  {
    id: 3,
    title: "Korean BBQ Beef Bowls",
    creator: "Jenny Kim",
    avatar: "/young-korean-woman-chef-with-apron-smiling-in-kitc.jpg",
    image: "/korean-bbq-beef-bowl-with-rice-kimchi-and-vegetabl.jpg",
    cookTime: "25 min",
    difficulty: "Medium",
    likes: 4100,
    ingredients: ["Thinly sliced beef", "Jasmine rice", "Kimchi", "Sesame oil", "Soy sauce", "Green onions"],
    price: "$22.75",
  },
  {
    id: 4,
    title: "Mediterranean Quinoa Salad",
    creator: "Alex Rodriguez",
    avatar: "/hispanic-male-chef-with-beard-smiling-portrait.jpg",
    image: "/colorful-mediterranean-quinoa-salad-with-feta-oliv.jpg",
    cookTime: "20 min",
    difficulty: "Easy",
    likes: 1800,
    ingredients: ["Quinoa", "Cucumber", "Cherry tomatoes", "Olives", "Feta cheese", "Lemon dressing"],
    price: "$14.25",
  },
  {
    id: 5,
    title: "Spicy Thai Curry",
    creator: "Ploy Siriwan",
    avatar: "/thai-woman-chef-with-traditional-cooking-attire-sm.jpg",
    image: "/spicy-red-thai-curry-with-vegetables-in-coconut-mi.jpg",
    cookTime: "30 min",
    difficulty: "Medium",
    likes: 2900,
    ingredients: ["Red curry paste", "Coconut milk", "Bell peppers", "Thai basil", "Jasmine rice", "Lime"],
    price: "$16.80",
  },
  {
    id: 6,
    title: "Classic Caesar Salad",
    creator: "Chef Williams",
    avatar: "/professional-black-male-chef-in-white-uniform-smil.jpg",
    image: "/classic-caesar-salad-with-romaine-lettuce-croutons.jpg",
    cookTime: "10 min",
    difficulty: "Easy",
    likes: 1500,
    ingredients: ["Romaine lettuce", "Parmesan cheese", "Croutons", "Caesar dressing", "Anchovies", "Lemon"],
    price: "$11.50",
  },
  {
    id: 7,
    title: "Homemade Pizza Margherita",
    creator: "Isabella Rossi",
    avatar: "/italian-woman-chef-with-dark-hair-smiling-in-kitch.jpg",
    image: "/authentic-pizza-margherita-with-fresh-mozzarella-b.jpg",
    cookTime: "45 min",
    difficulty: "Hard",
    likes: 5200,
    ingredients: ["Pizza dough", "San Marzano tomatoes", "Fresh mozzarella", "Fresh basil", "Olive oil", "Sea salt"],
    price: "$19.99",
  },
  {
    id: 8,
    title: "Protein Power Smoothie Bowl",
    creator: "Fitness Mike",
    avatar: "/athletic-male-fitness-instructor-with-protein-shak.jpg",
    image: "/placeholder.svg?height=300&width=400",
    cookTime: "5 min",
    difficulty: "Easy",
    likes: 3400,
    ingredients: ["Protein powder", "Frozen berries", "Banana", "Granola", "Chia seeds", "Almond milk"],
    price: "$13.75",
  },
  {
    id: 9,
    title: "Moroccan Tagine",
    creator: "Amina Hassan",
    avatar: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=300&width=400",
    cookTime: "50 min",
    difficulty: "Hard",
    likes: 2100,
    ingredients: ["Lamb or chicken", "Dried apricots", "Moroccan spices", "Onions", "Carrots", "Couscous"],
    price: "$24.50",
  },
  {
    id: 10,
    title: "Japanese Ramen Bowl",
    creator: "Hiroshi Tanaka",
    avatar: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=300&width=400",
    cookTime: "40 min",
    difficulty: "Hard",
    likes: 4800,
    ingredients: ["Ramen noodles", "Pork broth", "Soft-boiled eggs", "Green onions", "Nori seaweed", "Bamboo shoots"],
    price: "$21.25",
  },
]

export function VideoFeed() {
  return (
    <section id="feed" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-balance sm:text-4xl">Trending Recipes</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Discover what home cooks are making right now
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  )
}
