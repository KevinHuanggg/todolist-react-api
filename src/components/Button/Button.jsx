import React from 'react';

const Button = ({ className, children, onClick }) => {
  return (
    <button
      type="button"
      className={`flex px-12 py-3 justify-center rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;