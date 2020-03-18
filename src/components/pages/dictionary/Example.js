import React from 'react';

const Example = ({example}) => {
  const {japanese, meaning, audio} = example;
  return (
    <div className="example">
      <div className="example-jp">{japanese}</div>
      <div className="example-eng">{meaning.english}</div>
    </div>
  )
}

export default Example;
