import React from 'react'
import { MusicNote } from '@mui/icons-material'
import Ticker from 'react-ticker'

type VideoFooterProps = {
  channel: string
  description: string
  song: string
}

const VideoFooter = ({ channel, description, song }: VideoFooterProps) => {
  return (
    <div className='videoFooter'>
      <div className='videoFooter-text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className='videoFooter-ticker'>
          <MusicNote className='videoFooter-icon' />
          <Ticker mode='smooth'>
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className='videoFooter-record'
        src='https://static.
thenounproject.com/png/934821-200.png'
        alt='video footer'
      />
    </div>
  )
}

export default VideoFooter
