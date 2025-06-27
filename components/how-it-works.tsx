"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next"; // Import useTranslation

export function HowItWorks() {
  const { t, i18n } = useTranslation(); // Initialize useTranslation
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: 1,
      titleKey: "howItWorks.step1_title", // Use a key for translation
      descriptionKey: "howItWorks.step1_description", // Use a key for translation
      image: "/images/how-shopbook-works/create-invoices.png",
    },
    {
      number: 2,
      titleKey: "howItWorks.step2_title",
      descriptionKey: "howItWorks.step2_description",
      image: "/images/how-shopbook-works/send-invoices.png",
    },
    {
      number: 3,
      titleKey: "howItWorks.step3_title",
      descriptionKey: "howItWorks.step3_description",
      image: "/images/how-shopbook-works/automatic-reminder.png",
    },
    {
      number: 4,
      titleKey: "howItWorks.step4_title",
      descriptionKey: "howItWorks.step4_description",
      image: "/images/how-shopbook-works/generate-reports.png",
    },
  ];

  // Auto-rotate steps every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]); // Added steps.length to dependency array

  return (
    <section
      className={`py-20 bg-white ${
        i18n.language === "ta" ? "lg:mt-[290px] xl:mt-[90px] relative" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2
            className={`${
              i18n.language === "ta" || i18n.language === "si"
                ? "text-xl"
                : "text-2xl"
            } sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-gray-900 mb-10 text-center`}
          >
            {t("howItWorks.title")}
          </h2>
          <p className="sm:text-lg md:text-xl text-gray-600">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <>
                {" "}
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeStep === index
                      ? "border-[#2563EB] bg-white shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center font-medium text-lg flex-shrink-0`}
                    >
                      {step.number}
                    </div>
                    <div className="space-y-1">
                      <h3
                        className={`text-lg font-semibold ${
                          activeStep === index
                            ? "text-[#2563EB]"
                            : "text-gray-900"
                        }`}
                      >
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t(step.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
                {activeStep === index && (
                  <div className="lg:hidden flex flex-col items-center space-y-6  justify-center mx-auto">
                    <div className="relative ">
                      <div className=" h-[500px] w-[250px]  overflow-hidden">
                        <Image
                          src={steps[activeStep].image}
                          alt={`Step ${activeStep + 1}: ${t(
                            steps[activeStep].titleKey
                          )}`}
                          width={250}
                          height={500}
                          className="w-full h-full object-cover  "
                          unoptimized
                          priority
                        />
                      </div>
                    </div>

                    {/* Step indicators */}
                    <div className="flex space-x-2 mx-auto justify-center">
                      {steps.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            activeStep === index
                              ? "bg-[#2563EB]"
                              : "bg-gray-300"
                          }`}
                          onClick={() => setActiveStep(index)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </>
            ))}

            {/* App download buttons - text on images handled by image assets */}
            <div className="flex space-x-4 pt-4 justify-center md:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.mithushancj.shopbook&hl=en&gl=US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/cta/google-play-black.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={45}
                  className="h-auto"
                />
              </a>
              <a
                href="https://apps.apple.com/lk/app/shopbook/id1602633267"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/cta/app-store-black.png"
                  alt="Download from App Store"
                  width={150}
                  height={45}
                  className="h-auto"
                />
              </a>
            </div>
          </div>

          {/* Mobile mockup */}
          <div className=" flex flex-col items-center space-y-6 lg:block hidden justify-center mx-auto">
            <div className="relative ">
              <div className=" h-[500px] w-[250px]  overflow-hidden">
                <Image
                  src={steps[activeStep].image}
                  alt={`Step ${activeStep + 1}: ${t(
                    steps[activeStep].titleKey
                  )}`}
                  width={250}
                  height={500}
                  className="w-full h-full object-cover  "
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Step indicators */}
            <div className="flex space-x-2 mx-auto justify-center">
              {steps.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeStep === index ? "bg-[#2563EB]" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
