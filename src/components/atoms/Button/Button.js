import React from 'react';
import './Button.scss';

export const Button = ({ type, className, children, kind }) => {
  return (
    <button type={type} className={`custom-button ${className}`}>
      {children}
    </button>
  );
};
