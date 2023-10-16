import React, { useState } from 'react';
import Ad from './Ad';

export default function AdPage() {
  const [watch, setWatch] = useState(true);
  return (
    <>
      <Ad watch={watch} />
      <button onClick={() => setWatch((prev) => !prev)}>
        {watch ? '광고 안 보기' : '광고 보기'}
      </button>
    </>
  );
}
