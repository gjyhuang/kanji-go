import React, { useState } from 'react';
import KanjiVideo from './KanjiVideo';

const Entry = ({}) => {
  const kanjiData = {
    kanji: {
    character: "水",
    meaning: {
    english: "water"
    },
    strokes: {
    count: 4,
    timings: [
    0.972,
    2.333,
    4.067,
    4.6,
    5.533333
    ],
    images: [
    "https://media.kanjialive.com/kanji_strokes/mizu_1.svg",
    "https://media.kanjialive.com/kanji_strokes/mizu_2.svg",
    "https://media.kanjialive.com/kanji_strokes/mizu_3.svg",
    "https://media.kanjialive.com/kanji_strokes/mizu_4.svg"
    ]
    },
    onyomi: {
    romaji: "sui",
    katakana: "スイ"
    },
    kunyomi: {
    romaji: "mizu",
    hiragana: "みず"
    },
    video: {
    poster: "https://media.kanjialive.com/kanji_strokes/mizu_4.svg",
    mp4: "https://media.kanjialive.com/kanji_animations/kanji_mp4/mizu_00.mp4",
    webm: "https://media.kanjialive.com/kanji_animations/kanji_webm/mizu_00.webm"
    }
    },
    radical: {
    character: "⽔",
    strokes: 4,
    image: "https://media.kanjialive.com/radical_character/mizu.svg",
    position: {
    hiragana: "",
    romaji: "",
    icon: ""
    },
    name: {
    hiragana: "みず",
    romaji: "mizu"
    },
    meaning: {
    english: "water"
    },
    animation: [
    "https://media.kanjialive.com/rad_frames/mizu0.svg",
    "https://media.kanjialive.com/rad_frames/mizu1.svg",
    "https://media.kanjialive.com/rad_frames/mizu2.svg"
    ]
    },
    references: {
    grade: 1,
    kodansha: "3",
    classic_nelson: "2482"
    },
    examples: [
    {
    japanese: "水曜日（すいようび）",
    meaning: {
    english: "Wednesday"
    },
    audio: {
    opus: "https://media.kanjialive.com/examples_audio/audio-opus/mizu_06_a.opus",
    aac: "https://media.kanjialive.com/examples_audio/audio-aac/mizu_06_a.aac",
    ogg: "https://media.kanjialive.com/examples_audio/audio-ogg/mizu_06_a.ogg",
    mp3: "https://media.kanjialive.com/examples_audio/audio-mp3/mizu_06_a.mp3"
    }
    },
    {
    japanese: "水道（すいどう）",
    meaning: {
    english: "water supply"
    },
    audio: {
    opus: "https://media.kanjialive.com/examples_audio/audio-opus/mizu_06_b.opus",
    aac: "https://media.kanjialive.com/examples_audio/audio-aac/mizu_06_b.aac",
    ogg: "https://media.kanjialive.com/examples_audio/audio-ogg/mizu_06_b.ogg",
    mp3: "https://media.kanjialive.com/examples_audio/audio-mp3/mizu_06_b.mp3"
    }
    },
    {
    japanese: "水準（すいじゅん）",
    meaning: {
    english: "level, standard"
    },
    audio: {
    opus: "https://media.kanjialive.com/examples_audio/audio-opus/mizu_06_c.opus",
    aac: "https://media.kanjialive.com/examples_audio/audio-aac/mizu_06_c.aac",
    ogg: "https://media.kanjialive.com/examples_audio/audio-ogg/mizu_06_c.ogg",
    mp3: "https://media.kanjialive.com/examples_audio/audio-mp3/mizu_06_c.mp3"
    }
    },
    {
    japanese: "水中（すいちゅう）",
    meaning: {
    english: "underwater"
    },
    audio: {
    opus: "https://media.kanjialive.com/examples_audio/audio-opus/mizu_06_d.opus",
    aac: "https://media.kanjialive.com/examples_audio/audio-aac/mizu_06_d.aac",
    ogg: "https://media.kanjialive.com/examples_audio/audio-ogg/mizu_06_d.ogg",
    mp3: "https://media.kanjialive.com/examples_audio/audio-mp3/mizu_06_d.mp3"
    }
    },
    {
    japanese: "海水（かいすい）",
    meaning: {
    english: "ocean water"
    },
    audio: {
    opus: "https://media.kanjialive.com/examples_audio/audio-opus/mizu_06_e.opus",
    aac: "https://media.kanjialive.com/examples_audio/audio-aac/mizu_06_e.aac",
    ogg: "https://media.kanjialive.com/examples_audio/audio-ogg/mizu_06_e.ogg",
    mp3: "https://media.kanjialive.com/examples_audio/audio-mp3/mizu_06_e.mp3"
    }
    },
    {
    japanese: "水（みず）",
    meaning: {
    english: "water"
    },
    audio: {
    opus: "https://media.kanjialive.com/examples_audio/audio-opus/mizu_06_f.opus",
    aac: "https://media.kanjialive.com/examples_audio/audio-aac/mizu_06_f.aac",
    ogg: "https://media.kanjialive.com/examples_audio/audio-ogg/mizu_06_f.ogg",
    mp3: "https://media.kanjialive.com/examples_audio/audio-mp3/mizu_06_f.mp3"
    }
    },
    {
    japanese: "水着（みずぎ）",
    meaning: {
    english: "bathing suit"
    },
    audio: {
    opus: "https://media.kanjialive.com/examples_audio/audio-opus/mizu_06_g.opus",
    aac: "https://media.kanjialive.com/examples_audio/audio-aac/mizu_06_g.aac",
    ogg: "https://media.kanjialive.com/examples_audio/audio-ogg/mizu_06_g.ogg",
    mp3: "https://media.kanjialive.com/examples_audio/audio-mp3/mizu_06_g.mp3"
    }
    },
    {
    japanese: "水色（みずいろ）",
    meaning: {
    english: "light blue"
    },
    audio: {
    opus: "https://media.kanjialive.com/examples_audio/audio-opus/mizu_06_h.opus",
    aac: "https://media.kanjialive.com/examples_audio/audio-aac/mizu_06_h.aac",
    ogg: "https://media.kanjialive.com/examples_audio/audio-ogg/mizu_06_h.ogg",
    mp3: "https://media.kanjialive.com/examples_audio/audio-mp3/mizu_06_h.mp3"
    }
    }
    ]
    }

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
      <div className="kanji-animation">
        <KanjiVideo video={kanji.video} strokes={kanji.strokes} />
      </div>
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
