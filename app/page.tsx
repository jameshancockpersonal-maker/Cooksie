import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VideoFeed } from "@/components/video-feed"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VideoFeed />
      <Features />
      <Footer />
    </div>
  )
}
