import { Header } from "@/components/header"
import { LearnHero } from "@/components/learn-hero"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import NeedMoreHelp from "@/components/need-more-help"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main >
        <LearnHero />
        <CTASection />
        <NeedMoreHelp />
      </main>
      <Footer />
    </div>
  )
}
