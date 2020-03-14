import React, { useState } from 'react';
import KanjiVideo from './dict/KanjiVideo';

const Entry = ({kanjiData}) => {
  const { examples, kanji, radical, references } = kanjiData;

  // const { animation, character, image, meaning, name, position, strokes } = radical;

  // React.useEffect(() => {
  //   const data = fetchJisho();
  //   setKanjiData(data);
  //   console.log('kanjidata', kanjiData);
  // }, []);

  if (!kanji) return null;

  return (
    <div className="entry">
      <KanjiVideo video={kanji.video} strokes={kanji.strokes} />
      <div className="kanji-info">
        <div className="onyomi subheader-2">
          Onyomi
        </div>
        <div className="onyomi entry-text">
          {kanji.onyomi.katakana}
        </div>
        <div className="kunyomi subheader-2">
          Kunyomi
        </div>
        <div className="kunyomi entry-text">
          {kanji.kunyomi.hiragana}
        </div>
        <div className="meaning subheader-2">
          Meaning
        </div>
        <div className="meaning entry-text">
          {kanji.meaning.english}
        </div>
      </div>
      <div className="kanji-radical">
        <div className="subheader-1">Radical</div>
        <div className="radical-img">
          <img src={radical.image} alt="radical"/>
        </div>
        <div className="radical-info">
          <div className="radical-name">
            {radical.name.hiragana}
          </div>
          <div className="radical-meaning">
            {radical.meaning.english}
          </div>
        </div>
        <div className="radical-strokes">
          Strokes: {radical.strokes}
        </div>
      </div>
      <div className="kanji-examples">

      </div>
    </div>
  )
}

export default Entry;
