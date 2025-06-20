"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"
import Image from "next/image"

type Video = {
  name: string
  role: string
  company: string
  image: string
  youtubeUrl: string
}

const testimonials = [
  {
    name: "L.Y. Ranaweera",
    role: "Business Partner/Owner",
    company: "Master Clean",
    image: "/placeholder.svg?height=200&width=200",
    youtubeUrl: "https://www.youtube.com/watch?v=Dd4NG83M7V0"
  },
  {
    name: "S.W.K. Dinuka Deshan",
    role: "Owner",
    company: "Deshan Fashion",
    image: "/placeholder.svg?height=200&width=200",
    youtubeUrl: "https://www.youtube.com/watch?v=cFGbr-ZicXs&list=PLmLMrF3cFazQM6PvExbrd-ZVZNTXXZ-46&index=4"
  },
  {
    name: "L.Y. Ranaweera",
    role: "Owner",
    company: "RVH Group",
    image: "/placeholder.svg?height=200&width=200",
    youtubeUrl: "https://www.youtube.com/watch?v=w-m3-MSxFUE&list=PLmLMrF3cFazQM6PvExbrd-ZVZNTXXZ-46&index=5"
  },
  {
    name: "Charith Aravinda",
    role: "Business Partner",
    company: "Enterprises",
    image: "/placeholder.svg?height=200&width=200",
    youtubeUrl: "https://www.youtube.com/watch?v=BaPV6YNhrQ0&list=PLmLMrF3cFazQM6PvExbrd-ZVZNTXXZ-46&index=1"
  },
  {
    name: "A.G. Nilupul Viraj Gamage",
    role: "Milkbar",
    company: "Enterprises",
    image: "/placeholder.svg?height=200&width=200",
    youtubeUrl: "https://www.youtube.com/watch?v=R1IMB-QIx3k"
  },

]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [playingVideo, setPlayingVideo] = useState<{ videoIndex: number; video: Video } | null>(null)
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

  // const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsPerView)

  const getYouTubeEmbedUrl = (youtubeUrl: string) => {
    if(!youtubeUrl)return
    // Extract video ID from YouTube URL
    const videoIdMatch = youtubeUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    const videoId = videoIdMatch ? videoIdMatch[1] : 'bF2rcPYpPMs' // fallback to the provided video
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`
  }

  const getYouTubeVideoId = (youtubeUrl: string) => {
    if(!youtubeUrl)return
    // Extract video ID from YouTube URL
    const videoIdMatch = youtubeUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return videoIdMatch ? videoIdMatch[1] : 'bF2rcPYpPMs' // fallback to the provided video
  }
  const handleVideoClick = (videoIndex: number, video: Video) => {
    if (video.youtubeUrl) {
      setPlayingVideo({ videoIndex, video })
    }
  }
  const closeVideo = () => {
    setPlayingVideo(null)
  }
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="flex  sm:flex-row justify-center  mx-auto mb-6 sm:mb-8 md:mb-12 space-y-3 sm:space-y-0 items-baseline space-x-1">
          <h2 className="text-xl text-[18px] relative left-[10px] sm:left-0 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:mr-4">
            What Our Users Say
          </h2>
          <div className="overflow-x-auto -mx-4 md:mx-0 relative left-[20px] md:left-[110px] lg:left-[200px] xl:left-[320px] ">
            <div className={`flex space-x-3 sm:space-x-4 pt-4 px-4 md:px-0 flex-nowrap ${testimonials.length < 5 ? "md:hidden" : ""}`}>
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
        </div>

        {/* Swiper Container */}
        <div className="overflow-x-auto hide-scrollbar"style={{
    scrollbarWidth: "none",       // Firefox
    msOverflowStyle: "none",      // IE/Edge
  }}>
  <div
    className="flex transition-transform duration-300 ease-in-out"
    style={{
      transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
    }}
  >
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="flex-shrink-0 px-3 "
        style={{ width: isMobile ? "100%" : `${100 / cardsPerView}%` }}
      >
        <Card className="bg-white border-0 shadow-sm h-full">
          <CardContent className="p-6 text-left space-y-4">
            <div className="relative">
              <Image
                src={`https://img.youtube.com/vi/${getYouTubeVideoId(testimonial.youtubeUrl)}/maxresdefault.jpg`}
                alt={testimonial.name}
                width={200}
                height={200}
                className="w-full h-48 rounded-lg object-cover"
                onError={(e) => {
                  // Fallback to medium quality if maxresdefault fails
                  const target = e.target as HTMLImageElement;
                  if (testimonial.youtubeUrl) {
                    target.src = `https://img.youtube.com/vi/${getYouTubeVideoId(testimonial.youtubeUrl)}/hqdefault.jpg`;
                  }
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-lg">
                <div 
                  className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
                  onClick={() => handleVideoClick(index, testimonial)}
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            </div>
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
        <div className={`hidden md:flex justify-center mt-8 space-x-2 ${testimonials.length < 5 ? "md:hidden" : ""}`}>
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
           {playingVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-1"
          onClick={closeVideo}
        >
          <div 
            className="relative rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute -top-0 right-4 w-8 h-8 bg-black bg-opacity-75 text-white rounded-full flex items-center justify-center hover:bg-opacity-90 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="px-2">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{playingVideo.video.name}</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={getYouTubeEmbedUrl(playingVideo.video.youtubeUrl ||"video not available")}
                  title={playingVideo.video.name}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="text-gray-600 mt-1 text-center">{playingVideo.video.role} at {playingVideo.video.company}</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  )
}
