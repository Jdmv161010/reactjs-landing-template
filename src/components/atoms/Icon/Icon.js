import React from 'react';
import './Icon.scss';

export const Icon = ({ src, alt, className }) => {
  return <img className={`custom-img ${className}`} src={src} alt={alt} />;
};
