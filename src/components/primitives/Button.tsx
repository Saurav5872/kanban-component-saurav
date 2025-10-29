import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children, ...rest }) => (
  <button {...rest} className={`px-3 py-1 rounded ${rest.className ?? ''}`}>
    {children}
  </button>
);
