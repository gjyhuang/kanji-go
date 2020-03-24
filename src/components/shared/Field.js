import React from 'react';

const Field = ({ name, label, value, setValue, inputComponent: Input, inputProps }) => {
  return (
    <>
    {label}
    <Input
      name={name}
      value={value}
      onChange={setValue}
      {...inputProps}
    />
    </>
  )
}

export default Field;
