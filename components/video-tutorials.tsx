import {
  getYouTubeVideoId,
  handleVideoClickWithSection,
} from "@/lib/youtube-utils";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import React, { useState } from "react";
import VideoModel from "./video-model";
import { use } from "i18next";
import { useTranslation } from "react-i18next";

type Video = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  thumbnail: string;
  duration: string;
  youtubeUrl?: string;
};

type VideoSection = {
  titleKey: string;
  videos: Video[];
};

type VideoTutorialsProps = {
  videoSections: VideoSection[];
  currentVideoIndex: number[];
  setCurrentVideoIndex: React.Dispatch<React.SetStateAction<number[]>>;
  isMobile: boolean;
};

export function VideoTutorials({
  videoSections,
  currentVideoIndex,
  setCurrentVideoIndex,
  isMobile,
}: VideoTutorialsProps) {
  const videosPerView = isMobile ? 1 : 4;
  const [playingVideo, setPlayingVideo] = useState<{
    sectionIndex: number;
    videoIndex: number;
    video: Video;
  } | null>(null);
  const { t } = useTranslation();
  const goToPreviousVideo = (sectionIndex: number) => {
    setCurrentVideoIndex((prev) => {
      const newIndex = [...prev];
      newIndex[sectionIndex] = Math.max(0, newIndex[sectionIndex] - 1);
      return newIndex;
    });
  };

  const goToNextVideo = (sectionIndex: number) => {
    setCurrentVideoIndex((prev) => {
      const newIndex = [...prev];
      const maxIndex = Math.max(
        0,
        videoSections[sectionIndex].videos.length - videosPerView
      );
      newIndex[sectionIndex] = Math.min(maxIndex, newIndex[sectionIndex] + 1);
      return newIndex;
    });
  };

  const isAtStart = (sectionIndex: number) =>
    currentVideoIndex[sectionIndex] === 0;
  const isAtEnd = (sectionIndex: number) => {
    const maxIndex = Math.max(
      0,
      videoSections[sectionIndex].videos.length - videosPerView
    );
    return currentVideoIndex[sectionIndex] >= maxIndex;
  };

  const closeVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <div className="space-y-8 md:space-y-12">
      {videoSections.map((section, sectionIndex) => (
        <div key={section.titleKey} className="space-y-4 md:space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-md md:text-2xl font-bold text-gray-900 relative lg:left-5">
              {t(section.titleKey)}
            </h2>
            <div
              className={`flex space-x-2 lg:right-4 relative ${
                // Show buttons on mobile if more than 1 video, on sm+ if more than 3 videos
                (isMobile && section.videos.length > 1) ||
                (!isMobile && section.videos.length > 4)
                  ? "block"
                  : "hidden"
              }`}
            >
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
                transform: `translateX(-${
                  (currentVideoIndex[sectionIndex] * 100) / videosPerView
                }%)`,
                touchAction: "pan-y pinch-zoom",
              }}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                e.currentTarget.dataset.startX = touch.clientX.toString();
                e.currentTarget.dataset.startY = touch.clientY.toString();
                e.currentTarget.dataset.startTime = Date.now().toString();
              }}
              onTouchEnd={(e) => {
                const startX = Number.parseFloat(
                  e.currentTarget.dataset.startX || "0"
                );
                const startY = Number.parseFloat(
                  e.currentTarget.dataset.startY || "0"
                );
                const startTime = Number.parseFloat(
                  e.currentTarget.dataset.startTime || "0"
                );
                const endX = e.changedTouches[0].clientX;
                const endY = e.changedTouches[0].clientY;
                const endTime = Date.now();

                const deltaX = startX - endX;
                const deltaY = Math.abs(startY - endY);
                const deltaTime = endTime - startTime;
                const threshold = 50;

                // Only handle as swipe if:
                // 1. Horizontal movement is significant
                // 2. Horizontal movement is much greater than vertical
                // 3. It was a quick gesture (not a slow drag)
                // 4. Vertical movement is minimal
                if (
                  Math.abs(deltaX) > threshold &&
                  Math.abs(deltaX) > deltaY * 3 &&
                  deltaTime < 500 &&
                  deltaY < 30
                ) {
                  if (deltaX > 0 && !isAtEnd(sectionIndex)) {
                    // Swipe left - go to next
                    goToNextVideo(sectionIndex);
                  } else if (deltaX < 0 && !isAtStart(sectionIndex)) {
                    // Swipe right - go to previous
                    goToPreviousVideo(sectionIndex);
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
                          src={`https://img.youtube.com/vi/${getYouTubeVideoId(
                            video.youtubeUrl
                          )}/maxresdefault.jpg`}
                          alt={video.titleKey}
                          className="w-full h-40 md:h-40 object-cover"
                          onError={(e) => {
                            // Fallback to medium quality if maxresdefault fails
                            const target = e.target as HTMLImageElement;
                            if (video.youtubeUrl) {
                              target.src = `https://img.youtube.com/vi/${getYouTubeVideoId(
                                video.youtubeUrl
                              )}/hqdefault.jpg`;
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div
                            className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
                            onClick={() =>
                              handleVideoClickWithSection(
                                sectionIndex,
                                videoIndex,
                                video,
                                setPlayingVideo
                              )
                            }
                          >
                            <Play className="w-6 h-6 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-3 md:p-4 space-y-2 h-16 lg:h-24">
                        <h3 className="font-semibold text-gray-900  lg:text-md  text-[13px] text-left">
                          {t(video.titleKey)}
                        </h3>
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
                      const newIndex = [...prev];
                      newIndex[sectionIndex] = index;
                      return newIndex;
                    })
                  }
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentVideoIndex[sectionIndex] === index
                      ? "bg-orange-500"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      ))}
      {/* Video Modal Popup */}
      {playingVideo && (
        <VideoModel closeVideo={closeVideo} playingVideo={playingVideo} />
      )}
    </div>
  );
}
