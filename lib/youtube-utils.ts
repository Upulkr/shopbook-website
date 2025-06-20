export const getYouTubeEmbedUrl = (youtubeUrl: string) => {
  if (!youtubeUrl) return
  // Extract video ID from YouTube URL
  const videoIdMatch = youtubeUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
  const videoId = videoIdMatch ? videoIdMatch[1] : 'bF2rcPYpPMs' // fallback to the provided video
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`
}

export const getYouTubeVideoId = (youtubeUrl: string) => {
  if (!youtubeUrl) return
  // Extract video ID from YouTube URL
  const videoIdMatch = youtubeUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
  return videoIdMatch ? videoIdMatch[1] : 'bF2rcPYpPMs' // fallback to the provided video
}

export const handleVideoClick = (
  videoIndex: number, 
  video: { youtubeUrl?: string }, 
  setPlayingVideo: React.Dispatch<React.SetStateAction<any>>
) => {
  if (video.youtubeUrl) {
    setPlayingVideo({ videoIndex, video })
  }
}

export const handleVideoClickWithSection = (
  sectionIndex: number,
  videoIndex: number, 
  video: { youtubeUrl?: string }, 
  setPlayingVideo: React.Dispatch<React.SetStateAction<any>>
) => {
  if (video.youtubeUrl) {
    setPlayingVideo({ sectionIndex, videoIndex, video })
  }
} 