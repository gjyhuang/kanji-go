import React from 'react';
import { Player } from 'video-react';
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
          aspectRatio={"1:1"}
          style={{paddingTop: 0}}
          video
        >
          <source src={videoSrc} />
        </Player>
        <div>{currentStrokeIndex}</div>
        <div id="player-controls">
          <div className="icon-btn">
            {player.paused ?
              <i class="material-icons player-btn" onClick={play}>play_circle_outline</i> :
              <i class="material-icons player-btn" onClick={pause}>pause_circle_outline</i>}
          </div>
          <div className="icon-btn">
            <i class="material-icons player-btn" onClick={()=>seek(currentStrokeIndex + 1)}>skip_next</i>
          </div>
          <div className="icon-btn">
            <i class="material-icons player-btn" onClick={()=>seek(currentStrokeIndex - 1)}>skip_previous</i>
          </div>
          <div className="icon-btn">
            <i class="material-icons player-btn" onClick={()=>seek(currentStrokeIndex)}>replay</i>
          </div>
        </div>
      </div>
    );
}
export default KanjiVideo;
