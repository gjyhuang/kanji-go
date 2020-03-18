import React from 'react';
import { Player } from 'video-react';
import Button from '../../shared/Button';
import VideoFrame from './VideoFrame';

const KanjiVideo = ({video, strokes}) => {
  let [player, setPlayer] = React.useState(false);
  const [animationIsActive, setAnimationIsActive] = React.useState(false);
  const strokePoints = strokes.timings;
  const [currentStrokeIndex, setCurrentStrokeIndex] = React.useState(0);
  // const [pause, setPause] = React.useState(false);
  // const [changeCurrentTime, setChangeCurrentTime] = React.useState(false);
  // const [seek, setSeek] = React.useState(false);

  React.useEffect(()=>{
    player.subscribeToStateChange(handleStateChange);
  }, [player])
  React.useEffect(()=>{
    if(player.getState().player.currentTime > strokePoints[currentStrokeIndex + 1]){
      setCurrentStrokeIndex(currentStrokeIndex + 1);
    }
  }, [player, currentStrokeIndex, strokePoints])

  const handleStateChange=(state)=>{
    setPlayer(state)
  }
  const play=()=>{
    setAnimationIsActive(true);
    player.play();
  }
  const pause=()=>{
    player.pause();
  }
  const seek=(index)=>{
    setAnimationIsActive(true);
    player.seek(strokePoints[index]);
    setCurrentStrokeIndex(index);
  }

    return (
      <div className="kanji-animation">
        <div className="kanji-wrapper">
          <div className="kanji-img">
            <img
              src={video.poster}
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
            poster={video.poster}
          >
            <source src={video.mp4} />
          </Player>
        </div>
        <div id="player-controls">
          <Button
            text={animationIsActive ? "Show kanji" : "View kanji strokes"}
            onClickFunc={() => {
              if (animationIsActive) {
                player.pause();
                setAnimationIsActive(false);

              }
              else {
                setAnimationIsActive(true);
                play();
              }
            }}
            style={{width: 224}}
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

        <div className="stroke-frames">
          {strokes.images.map((frame, idx) => <VideoFrame key={idx} img={frame} idx={idx + 1} seek={() => seek(idx+1)} />)}
        </div>
      </div>
    );
}
export default KanjiVideo;
