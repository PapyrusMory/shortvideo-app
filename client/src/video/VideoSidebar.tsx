import { useState } from 'react'
import { Favorite, FavoriteBorder, Message, Share } from '@mui/icons-material'

type VideoSidebarProps = {
  messages: number
  shares: number
  likes: number
}

const VideoSidebar = ({ messages, shares, likes }: VideoSidebarProps) => {
  const [liked, setLiked] = useState(false)
  return (
    <div className='videoSidebar'>
      <div className='videoSidebar-button'>
        {liked ? (
          <Favorite fontSize='large' onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorder fontSize='large' onClick={() => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className='videoSidebar-button'>
        <Message fontSize='large' />
        <p>{messages}</p>
      </div>
      <div className='videoSidebar-button'>
        <Share fontSize='large' />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar
