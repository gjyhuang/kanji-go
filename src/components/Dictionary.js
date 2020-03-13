import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Dictionary = () => {
  const [kanjiData, setKanjiData] = useState({});
  console.log('kanjiData?', kanjiData)

  return (
    <div id="dictionary">
      <SearchBar setResultData={setKanjiData}/>
    </div>
  )
}

export default Dictionary;
