import React from 'react'

function FullVideoPlayer({activechapter}) {
    console.log(activechapter);
  return (
    <div>
      <video width="1000" height="250"
      controls controlsList='nodownload'>
      <source src={activechapter?.video?.url}
      type='video/mp4'/>
      </video>
    </div>
  )
}

export default FullVideoPlayer
