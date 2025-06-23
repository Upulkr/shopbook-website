"use client"

import { CTASection } from "@/components/cta-section"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import SupportSection from "@/components/support-section"
import { useTranslation } from "react-i18next"


export default function ContactPage() {
  const { t } = useTranslation(); // Initialize useTranslation

  // Construct the faqs array using translated strings
  const faqs: FAQItem[] = [
    {
      question: t('contactus.question1'),
      answer: t('contactus.answer1'),
    },
    {
      question: t('contactus.question2'),
      answer: t('contactus.answer2'),
    },
    {
      question: t('contactus.question3'),
      answer: t('contactus.answer3'),
    },
    {
      question: t('contactus.question4'),
      answer: t('contactus.answer4'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pb-20">
        <SupportSection />
        <FAQSection
          faqs={faqs}
          imageSrc="/images/faq/contact_faq.png"
          imageAlt={t('faqSection.image_alt')} // Translated image alt text
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}