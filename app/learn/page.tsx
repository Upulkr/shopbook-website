import { Header } from "@/components/header"
import { LearnHero } from "@/components/learn-hero"
import { Footer } from "@/components/footer"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LearnHero />
      </main>
      <Footer />
    </div>
  )
}
