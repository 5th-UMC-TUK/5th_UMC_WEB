import React, { useState } from 'react';
import Ad from './Ad';

export default function AdPage() {
  const [watch, setWatch] = useState(true);

  const handleToggleClick = () => {
    setWatch(!watch);
  };

  return (
    <div>
      <Ad watch={watch} />
      <button onClick={handleToggleClick}>
        {watch ? '광고 안 보기' : '광고 보기'}
      </button>
    </div>
  );
}
