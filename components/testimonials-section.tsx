"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "L.Y. Ranaweera",
    role: "Business Partner/Owner",
    company: "Master Clean",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "S.W.K. Dinuka Deshan",
    role: "Owner",
    company: "Deshan Fashion",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "L.Y. Ranaweera",
    role: "Owner",
    company: "RVH Group",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Charith Aravinda",
    role: "New Mahara",
    company: "Enterprises",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dinuka Deshan",
    role: "Owner",
    company: "Deshan Fashion",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Ranaweera",
    role: "Owner",
    company: "RVH Group",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Aravinda",
    role: "New Mahara",
    company: "Enterprises",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const cardsPerView = isMobile ? 1 : 4 // Show 1 card on mobile, 4 on larger screens
  const maxIndex = Math.max(0, testimonials.length - cardsPerView)

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const isAtStart = currentIndex === 0
  const isAtEnd = currentIndex >= maxIndex

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsPerView)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center items-center mx-auto mb-6 sm:mb-8 md:mb-12 space-y-3 sm:space-y-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:mr-4">
            What Our Users Say
          </h2>
          <div className="flex space-x-2 relative justify-center sm:justify-end lg:left-[340px]">
            <button
              onClick={goToPrevious}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                isAtStart
                  ? "bg-orange-300 text-gray-400 cursor-not-allowed"
                  : "bg-orange-500 text-orange-600 hover:bg-orange-600"
              }`}
              disabled={isAtStart}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
            <button
              onClick={goToNext}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                isAtEnd
                  ? "bg-orange-300 text-gray-400 cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
              disabled={isAtEnd}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: isMobile ? "100%" : `${100 / cardsPerView}%` }}
              >
                <Card className="bg-white border-0 shadow-sm h-full">
                  <CardContent className="p-6 text-left space-y-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={200}
                      height={200}
                      className="w-full h-48 rounded-lg object-cover"
                    />
                    <div className="space-y-1 text-center">
                      <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="hidden md:flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Mobile pagination dots */}
        {isMobile && (
          <div className="flex justify-center mt-4 space-x-2 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
