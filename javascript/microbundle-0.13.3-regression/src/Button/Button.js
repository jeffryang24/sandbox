import React from 'react';

export function Button(props) {
  return <button {...props}>{`Hello, ${props.name}`}</button>;
}
