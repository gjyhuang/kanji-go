import React, { useState } from 'react';
import KanjiVideo from './KanjiVideo';

const Entry = ({kanjiData}) => {
  const { examples, kanji, radical, references } = kanjiData;

  // React.useEffect(() => {
  //   const data = fetchJisho();
  //   setKanjiData(data);
  //   console.log('kanjidata', kanjiData);
  // }, []);

  if (!kanji) return null;

  return (
    <div className="entry">
      <div className="kanji-radicals">

      </div>
      <div className="kanji-animation">
        <KanjiVideo video={kanji.video} strokes={kanji.strokes} />
      </div>
      <div className="kanji-examples">

      </div>
    </div>
  )
}

export default Entry;
