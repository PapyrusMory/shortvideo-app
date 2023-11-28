import { useState, useEffect } from 'react'
import Video from './video/Video'
import './App.css'
import axios from './apiClient'
import { shortVideo } from './types/shortVideo'

function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/api/posts/all')
      setVideos(res.data)
      return res
    }
    fetchData()
  }, [])
  return (
    <div className='app'>
      <div className='app-videos'>
        {videos.map(
          ({ url, channel, description, song, likes, shares, messages }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  )
}

export default App
