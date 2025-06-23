import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SocialProof } from "@/components/social-proof";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorks } from "@/components/how-it-works";
import { ComparisonSection } from "@/components/comparison-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { type FAQItem, FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import I18nProvider from "@/providers/I18nProvider";

const faqs: FAQItem[] = [
  {
    question: "Is my data secure with Shopbook?",
    answer:
      "All information is stored securely with encryption, and we never share your business data with third parties. Your invoices and customer information remain completely private. We prioritize your privacy and business confidentiality.",
  },
  {
    question: "Can I use Shopbook for multiple businesses?",
    answer:
      "Yes, you can use Shopbook for multiple businesses. You can create multiple accounts and manage them separately.",
  },
  {
    question: "Can I share invoices with customers who don't have the app?",
    answer:
      "Yes, you can share invoices with customers who don't have the app. You can share the invoice link with them and they can view the invoice on their phone.",
  },
  {
    question: "Can I access my data again if my cellphone is lost/damaged?",
    answer:
      "Yes, you can access your data again if your cellphone is lost/damaged. You can login to your account with your email and password and your data will be available to you.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturesSection />
        <HowItWorks />
        <ComparisonSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection faqs={faqs} imageSrc="/images/faq/home_faq.png" />
      </main>
      <Footer />
    </div>
  );
}
