import React, { ReactNode } from 'react';

export type Props = {
  children?: ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: Props) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
