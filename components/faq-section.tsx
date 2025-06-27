"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export type FAQItem = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  faqs: FAQItem[];
  imageSrc: string;
  imageAlt?: string;
}

export function FAQSection({
  faqs,
  imageSrc,
  imageAlt = "FAQ Image",
}: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className={`${
            i18n.language === "ta" || i18n.language === "si"
              ? "text-xl"
              : "text-2xl"
          } sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-gray-900 mb-10 text-center`}
        >
          {t("faqSection.main_title")}
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-12">
        {/* <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12"> */}
        {/* Left: Image */}
        <div className="relative w-full max-w-sm flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={407}
            height={40}
            className="rounded-2xl w-full h-auto object-cover"
            priority
          />
        </div>
        {/* Right: FAQ content */}
        <div className="flex-1 w-full">
          <div className="bg-white rounded-xl shadow-none divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  className="w-full flex items-center justify-between py-6 focus:outline-none"
                  onClick={() => toggleExpanded(index)}
                  aria-expanded={expandedIndex === index}
                >
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    {faq.question}
                  </span>
                  {expandedIndex === index ? (
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
                {expandedIndex === index && (
                  <div className="pl-1 pb-6 pr-8 text-gray-400 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
