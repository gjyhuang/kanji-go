import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';

const SearchBar = ({setResultData}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const result = await fetchJisho(query);
    setResultData(result);
  }

  const fetchJisho = async (kanji) => {
    try {
      const { data } = await axios.get(`/api/entries/${kanji}`);
      return data;
    } catch(err) {
      console.error(err);
    }
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      handleSubmit(event);
    }
  }

  return (
    <div className="search-bar">
      <form>
        <input
          type="text"
          className="search-jp"
          defaultValue={query}
          onChange={evt => setQuery(evt.target.value)}
          onKeyDown={evt => onKeyDown(evt)}
        ></input>
      </form>
      <Button
        onClickFunc={handleSubmit}
        text="Submit"
      />
    </div>
  )
}

export default SearchBar;
