import React, { FC } from 'react';

const MyButton: FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default MyButton;
