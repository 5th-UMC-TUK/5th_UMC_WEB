import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Detail() {
  const title = useParams();
  const { state } = useLocation();

  return (
    <div style={{ display: 'flex', marginLeft: '50px' }}>
      <img
        src={state.bgImage}
        alt={title.tile}
        style={{ width: '200px', marginRight: '20px' }}
      />
      <h1>{title.title}</h1>
    </div>
  );
}

export default Detail;
