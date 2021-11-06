import * as React from 'react';
import { container, detailsContainer, videoStyle, videoContainer } from './content-video.module.css'

const ContentVideo = ({ videoSrcURL, videoTittle, videoDescription }) => {
  return (
    <div className={container}>
      <div className={detailsContainer}>
        <h3>{videoTittle}</h3>
        <p>{videoDescription}</p>
      </div>
      <div className={videoContainer} >
        <video className={videoStyle} controls>
          <source src={videoSrcURL} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default ContentVideo;