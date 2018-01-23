import React from 'react';

const Button = ({onClick, btnTypes, btnLabel}) => {
  return (
    <button
      type="button"
      className={btnTypes}
      onClick={onClick}
      value={btnLabel}
      >
      {btnLabel}
    </button>
  );
};

export default Button;
