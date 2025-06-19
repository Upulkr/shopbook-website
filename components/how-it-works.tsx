"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

const steps = [
  {
    number: 1,
    title: "Create Invoices",
    description: "Generate invoices for cash or credit sales with clear due dates.",
    image: "/images/how-shopbook-works/create-invoices.png",
  },
  {
    number: 2,
    title: "Send via WhatsApp or SMS",
    description: "Instantly deliver invoices to your customers via WhatsApp or SMS.",
    image: "/images/how-shopbook-works/send-invoices.png",
  },
  {
    number: 3,
    title: "Set Automatic Reminders",
    description: "Ensure timely payments with automated, polite reminders.",
    image: "/images/how-shopbook-works/automatic-reminder.png",
  },
  {
    number: 4,
    title: "Generate Reports",
    description: "Access comprehensive reports and payment summaries anytime.",
    image: "/images/how-shopbook-works/generate-reports.png",
  },
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  // Auto-rotate steps every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">How Shopbook Works</h2>
          <p className="text-lg text-gray-600">Start managing your invoices in just 4 simple steps</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
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
                      className={`text-lg font-semibold ${activeStep === index ? "text-[#2563EB]" : "text-gray-900"}`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* App download buttons */}
            <div className="flex space-x-4 pt-4 justify-center md:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.mithushancj.shopbook&hl=en&gl=US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/google-play-black.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={45}
                  className="h-auto"
                />
              </a>
              <a href="https://apps.apple.com/lk/app/shopbook/id1602633267" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/app-store-black.png"
                  alt="Download from App Store"
                  width={150}
                  height={45}
                  className="h-auto"
                />
              </a>
            </div>
          </div>

          {/* Mobile mockup */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative ">
             
                <div className=" h-[500px] w-[250px]  overflow-hidden">
                  <Image
                    src={steps[activeStep].image}
                    alt={`Step ${activeStep + 1}: ${steps[activeStep].title}`}
                    width={250}
                    height={500}
                    className="w-full h-full object-cover  "
                    unoptimized
                    priority
                  />
                </div>
             
            </div>

            {/* Step indicators */}
            <div className="flex space-x-2">
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
  )
}
