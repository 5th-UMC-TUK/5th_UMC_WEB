import React from 'react';

export default function Ad({ watch }) {
  return <div>{watch && <img src="/src/img/adimage.svg" />}</div>;
}
