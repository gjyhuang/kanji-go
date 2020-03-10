import React from 'react';
import { Player } from 'video-react';
import videoSrc from '../assets/videos/6C34.mp4';
import kanjiImg from '../assets/img/6C34.png';
import Button from './Button';

const KanjiVideo = () => {
  let [player, setPlayer] = React.useState(false);
  const [animationIsActive, setAnimationIsActive] = React.useState(false);
  const strokePoints = [0, 2.455, 5.400, 7.171, 8.978];
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

  console.log(player, player.poster)

    return (
      <div className="kanji-animation">
        <div className="kanji-wrapper">
          <div className="kanji-img">
            <img
              src={kanjiImg}
              alt="kanji"
              style={animationIsActive ? {display: "none"} : {display: "block"}}
            />
          </div>
          <Player
            fluid={true}
            playsInline
            ref={playerParam => {
              player = playerParam;
            }}
            aspectRatio={"1:1"}
          >
            <source src={videoSrc} />
          </Player>
        </div>
        <div id="player-controls">
          <Button
            text={animationIsActive ? "Show kanji" : "View kanji strokes"}
            onClickFunc={() => {
              setAnimationIsActive(!animationIsActive);
              play();
            }}
            style={{width: 200}}
          />
          <div className="control-row">
            <div className="icon-btn">
              <i className="material-icons player-btn" onClick={()=>seek(currentStrokeIndex - 1)}>skip_previous</i>
            </div>
            <div className="icon-btn">
              {player.paused ?
                <i className="material-icons player-btn" onClick={play}>play_circle_outline</i> :
                <i className="material-icons player-btn" onClick={pause}>pause_circle_outline</i>}
            </div>
            <div className="icon-btn">
              <i className="material-icons player-btn" onClick={()=>seek(currentStrokeIndex + 1)}>skip_next</i>
            </div>
          </div>
          <div className="control-row">
            <div className="icon-btn">
              <i className="material-icons player-btn" onClick={()=>seek(currentStrokeIndex)}>replay</i>
            </div>
          </div>
        </div>

        <div>{currentStrokeIndex}</div>
      </div>
    );
}
export default KanjiVideo;
