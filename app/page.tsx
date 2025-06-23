
"use client"
import { ComparisonSection } from "@/components/comparison-section";
import { CTASection } from "@/components/cta-section";
import { type FAQItem, FAQSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { SocialProof } from "@/components/social-proof";
import { TestimonialsSection } from "@/components/testimonials-section";
import { useTranslation } from "react-i18next";



export default function HomePage() {
    const { t } = useTranslation();
    const faqs: FAQItem[] = [
   {
      question: t("faqSection.q1_question"),
      answer: t("faqSection.q1_answer"),
    },
    {
      question: t("faqSection.q2_question"),
      answer: t("faqSection.q2_answer"),
    },
    {
      question: t("faqSection.q3_question"),
      answer: t("faqSection.q3_answer"),
    },
    {
      question: t("faqSection.q4_question"),
      answer: t("faqSection.q4_answer"),
    },
];
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
