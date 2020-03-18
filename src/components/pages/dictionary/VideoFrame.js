import React from 'react';

const VideoFrame = ({img, idx, seek}) => {
  const altMsg = `kanji stroke #${idx}`
  return (
    <div className="frame" onMouseEnter={seek}>
      <img src={img} alt={altMsg} />
    </div>
  )
}

export default VideoFrame;
