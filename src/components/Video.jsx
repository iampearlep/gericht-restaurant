import React from 'react'

const Video = () => {
  return (
    <div>
       <div className='w-full'>
       {/* <video className='w-full h-[400px]' controls>
      <source src="../assets/video.mp4" type="video/raw" />
    </video> */}
      <iframe className='w-full h-[380px]' src="https://www.youtube.com/embed/WdWEMXnHBVI?controls=0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
    </div>
  )
}

export default Video
