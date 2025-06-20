import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"
import React, { useState } from "react"

type Video = {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  youtubeUrl?: string
}

type VideoSection = {
  title: string
  videos: Video[]
}

type VideoTutorialsProps = {
  videoSections: VideoSection[]
  currentVideoIndex: number[]
  setCurrentVideoIndex: React.Dispatch<React.SetStateAction<number[]>>
  isMobile: boolean
}

export function VideoTutorials({
  videoSections,
  currentVideoIndex,
  setCurrentVideoIndex,
  isMobile,
}: VideoTutorialsProps) {
  const videosPerView = isMobile ? 1 : 4
  const [playingVideo, setPlayingVideo] = useState<{ sectionIndex: number; videoIndex: number; video: Video } | null>(null)

  const goToPreviousVideo = (sectionIndex: number) => {
    setCurrentVideoIndex((prev) => {
      const newIndex = [...prev]
      newIndex[sectionIndex] = Math.max(0, newIndex[sectionIndex] - 1)
      return newIndex
    })
  }

  const goToNextVideo = (sectionIndex: number) => {
    setCurrentVideoIndex((prev) => {
      const newIndex = [...prev]
      const maxIndex = Math.max(0, videoSections[sectionIndex].videos.length - videosPerView)
      newIndex[sectionIndex] = Math.min(maxIndex, newIndex[sectionIndex] + 1)
      return newIndex
    })
  }

  const isAtStart = (sectionIndex: number) => currentVideoIndex[sectionIndex] === 0
  const isAtEnd = (sectionIndex: number) => {
    const maxIndex = Math.max(0, videoSections[sectionIndex].videos.length - videosPerView)
    return currentVideoIndex[sectionIndex] >= maxIndex
  }

  const handleVideoClick = (sectionIndex: number, videoIndex: number, video: Video) => {
    if (video.youtubeUrl) {
      setPlayingVideo({ sectionIndex, videoIndex, video })
    }
  }

  const closeVideo = () => {
    setPlayingVideo(null)
  }

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

  return (
    <div className="space-y-8 md:space-y-12">
      {videoSections.map((section, sectionIndex) => (
        <div key={section.title} className="space-y-4 md:space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 relative lg:left-5">{section.title}</h2>
            <div className={`flex space-x-2 lg:right-4 relative ${
              // Show buttons on mobile if more than 1 video, on sm+ if more than 3 videos
              (isMobile && section.videos.length > 1) || (!isMobile && section.videos.length > 4) 
                ? 'block' 
                : 'hidden'
            }`}>
              <button
                onClick={() => goToPreviousVideo(sectionIndex)}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors ${
                  isAtStart(sectionIndex)
                    ? "bg-orange-300 text-gray-400 cursor-not-allowed"
                    : "bg-orange-500 text-orange-600 hover:bg-orange-600"
                }`}
                disabled={isAtStart(sectionIndex)}
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>
              <button
                onClick={() => goToNextVideo(sectionIndex)}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors ${
                  isAtEnd(sectionIndex)
                    ? "bg-orange-300 text-gray-400 cursor-not-allowed"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
                disabled={isAtEnd(sectionIndex)}
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Swiper Container with touch support */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out touch-pan-x"
              style={{
                transform: `translateX(-${(currentVideoIndex[sectionIndex] * 100) / videosPerView}%)`,
              }}
              onTouchStart={(e) => {
                const touch = e.touches[0]
                e.currentTarget.dataset.startX = touch.clientX.toString()
              }}
              onTouchEnd={(e) => {
                const startX = Number.parseFloat(e.currentTarget.dataset.startX || "0")
                const endX = e.changedTouches[0].clientX
                const diff = startX - endX
                const threshold = 50

                if (Math.abs(diff) > threshold) {
                  if (diff > 0 && !isAtEnd(sectionIndex)) {
                    // Swipe left - go to next
                    goToNextVideo(sectionIndex)
                  } else if (diff < 0 && !isAtStart(sectionIndex)) {
                    // Swipe right - go to previous
                    goToPreviousVideo(sectionIndex)
                  }
                }
              }}
            >
              {section.videos.map((video, videoIndex) => (
                <div
                  key={video.id}
                  className="flex-shrink-0 px-2 md:px-3"
                  style={{
                    width: isMobile ? "100%" : `${100 / videosPerView}%`,
                  }}
                >
                  {video.youtubeUrl && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer  ">
                      <div className="relative">
                        <img
                          src={`https://img.youtube.com/vi/${getYouTubeVideoId(video.youtubeUrl)}/maxresdefault.jpg`}
                          alt={video.title}
                          className="w-full h-40 md:h-40 object-cover"
                          onError={(e) => {
                            // Fallback to medium quality if maxresdefault fails
                            const target = e.target as HTMLImageElement;
                            if (video.youtubeUrl) {
                              target.src = `https://img.youtube.com/vi/${getYouTubeVideoId(video.youtubeUrl)}/hqdefault.jpg`;
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div 
                            className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
                            onClick={() => handleVideoClick(sectionIndex, videoIndex, video)}
                          >
                            <Play className="w-6 h-6 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-3 md:p-4 space-y-2 h-24">
                        <h3 className="font-semibold text-gray-900 lg:text-sm leading-tight text-[13px]">{video.title}</h3>
                        {/* <p className="text-gray-600 text-xs leading-relaxed">{video.description}</p> */}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile pagination dots */}
          {isMobile && (
            <div className="flex justify-center mt-4 space-x-2">
              {section.videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentVideoIndex((prev) => {
                      const newIndex = [...prev]
                      newIndex[sectionIndex] = index
                      return newIndex
                    })
                  }
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentVideoIndex[sectionIndex] === index ? "bg-orange-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Video Modal Popup */}
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
              {/* <h3 className="text-xl font-bold text-gray-900 mb-1">{playingVideo.video.title}</h3> */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={getYouTubeEmbedUrl(playingVideo.video.youtubeUrl ||"video not available")}
                  title={playingVideo.video.title}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {/* <p className="text-gray-600 mt-1 justify-center">{playingVideo.video.description}</p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 