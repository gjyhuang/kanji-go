import React from 'react';

const VideoFrame = ({img, seek}) => {
  return (
    <div className="frame" onMouseEnter={seek}>
      <img src={img} />
    </div>
  )
}

export default VideoFrame;
