import React from 'react';

const defaultText = 'Start';

const handleClick = () => {
  console.log('handleClick');
};

const Button = () => <button onClick={handleClick}>{defaultText}</button>;

export default Button;
