import React from 'react';
import { Player, ControlBar } from 'video-react';
import Button from './Button';
import videoSrc from '../assets/videos/6C34.mp4';

const KanjiVideo = () => {
  let [player, setPlayer] = React.useState(false);
  let strokePoints = [0, 2.455, 5.400, 7.171, 8.978];
  const [currentStrokeIndex, setCurrentStrokeIndex] = React.useState(0);
  // const [pause, setPause] = React.useState(false);
  // const [changeCurrentTime, setChangeCurrentTime] = React.useState(false);
  // const [seek, setSeek] = React.useState(false);

  React.useEffect(()=>{
    player.subscribeToStateChange(handleStateChange);
  }, [])
  React.useEffect(()=>{
    if(player.getState().player.currentTime > strokePoints[currentStrokeIndex + 1]){
      // pause();
      setCurrentStrokeIndex(currentStrokeIndex + 1);
    }
  }, [player])

  const handleStateChange=(state)=>{
    setPlayer(state)
  }
  const play=()=>{
    player.play();
  }
  const pause=()=>{
    player.pause();
  }
  const seek=(index)=>{
    // console.log(player.getState().player.currentTime);
    player.seek(strokePoints[index]);
    setCurrentStrokeIndex(index);
  }

    return (
      <div className="kanji-animation">
        <Player
          ref={playerParam => {
            player = playerParam;
          }}
        >
          <source src={videoSrc} />
        </Player>
        <div>{currentStrokeIndex}</div>
        <div className="py-3">
          <Button onClickFunc={play} text="play" />
        </div>
        <div className="py-3">
          <Button onClickFunc={pause} text="pause" />
        </div>
        <div className="py-3">
          <Button onClickFunc={()=>seek(currentStrokeIndex + 1)} text="next" />
        </div>
        <div className="py-3">
          <Button onClickFunc={()=>seek(currentStrokeIndex-1)} text="previous" />
        </div>
        <div className="py-3">
          <Button onClickFunc={()=>seek(currentStrokeIndex)} text="redo" />
        </div>
      </div>
    );
}
export default KanjiVideo;
