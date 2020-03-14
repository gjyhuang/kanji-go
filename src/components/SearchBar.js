import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';

const SearchBar = ({setResultData}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async evt => {
    evt.preventDefault();
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

  return (
    <div className="search-bar">
      <form>
        <input
          type="text"
          className="search-jp"
          defaultValue={query}
          onChange={evt => setQuery(evt.target.value)}
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
