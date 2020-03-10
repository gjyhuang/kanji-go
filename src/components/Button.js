import React from 'react';

const Button = ({onClickFunc, text, style}) => {
  return (
    <div
      className="button"
      onClick={onClickFunc}
      style={style}
    >
      {text}
    </div>
  )
}

export default Button;
