import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';

const SearchBar = ({setResultData}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async evt => {
    evt.preventDefault();
    const result = await fetchJisho(query);
    console.log(result)
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
      Search!
      <form>
        <input
          type="text"
          className="search-jp"
          defaultValue={query}
          onChange={evt => setQuery(evt.target.value)}
        ></input>
        <Button onClickFunc={handleSubmit} text="Submit" />
      </form>
    </div>
  )
}

export default SearchBar;
