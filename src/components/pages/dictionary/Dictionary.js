import React, { useState } from 'react';
import SearchBar from '../../shared/SearchBar';
import Entry from './Entry';

const Dictionary = () => {
  const [kanjiData, setKanjiData] = useState({});
  console.log('kanjiData?', kanjiData)

  return (
    <div id="dictionary">
      <SearchBar setResultData={setKanjiData}/>
      <Entry kanjiData={kanjiData}/>
    </div>
  )
}

export default Dictionary;
