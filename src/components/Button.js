import React from 'react';

const Button = ({onClickFunc, text}) => {
  return (
    <div
      className="button"
      onClick={onClickFunc}
    >
      {text}
    </div>
  )
}

export default Button;
