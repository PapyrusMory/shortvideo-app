import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

type VideoProps = {
  url: string
  channel: string
  description: string
  song: string
  likes: number
  shares: number
  messages: number
}

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}: VideoProps) => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current?.pause()
      setPlaying(false)
    } else {
      videoRef.current?.play()
      setPlaying(true)
    }
  }

  return (
    <div className='video'>
      <video
        src={url}
        className='video-player'
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      />
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  )
}

export default Video
