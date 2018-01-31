import React from 'react';

const Button = ({onClick, btnTypes, btnLabel, threshold}) => {
  return (
    <button
      type="button"
      className={btnTypes}
      onClick={onClick}
      value={btnLabel}
      threshold={threshold}
      >
      {btnLabel}
    </button>
  );
};

export default Button;
