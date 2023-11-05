import React from 'react';

export default function Ad({ watch }) {
  return (
    <div>
      {watch && <img src="/assets/adimage.svg" style={{ width: '100%' }} />}
    </div>
  );
}
