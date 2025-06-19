import { CTASection } from "@/components/cta-section"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const faqs: FAQItem[] = [
  {
    question: "Is support really free?",
    answer: "Yes! All support is completely free for Shopbook users. We believe in helping our users succeed.",
  },
  {
    question: "What languages do you support?",
    answer: "We support multiple languages to help users from different regions.",
  },
  {
    question: "Do you provide phone support?",
    answer: "Yes, our support team is available by phone to assist you with any queries.",
  },
  {
    question: "Can you help me set up my account?",
    answer: "Absolutely! Our team can guide you step-by-step to set up your Shopbook account.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FAQSection faqs={faqs} imageSrc="/images/faq/contact_faq.png" imageAlt="Shopbook Customer Support Team" />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
