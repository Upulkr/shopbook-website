import { getYouTubeEmbedUrl } from '@/lib/youtube-utils'
import { X } from 'lucide-react'
import React from 'react'

type VideoModelProps = {
  closeVideo: () => void
  playingVideo: any
}

const VideoModel = ({closeVideo,playingVideo}:VideoModelProps) => {
  return (
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
  )
}

export default VideoModel