import React, { useState } from 'react';

const Flashcard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // hardcoded test
  const front = "水";
  const back = "water";

  const flip = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="flashcard" onClick={flip}>
      <div className="flipper">
        <div className="flashcard-front flashcard-text-large"
          style={{
            position: isFlipped ? 'relative' : 'absolute',
            transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)'
          }}
        >
          {front}
        </div>
        <div className="flashcard-back flashcard-text-med"
          style={{
            position: isFlipped ? 'absolute' : 'relative',
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)'
          }}
        >
          {back}
        </div>
      </div>
    </div>
  )
}

export default Flashcard;
