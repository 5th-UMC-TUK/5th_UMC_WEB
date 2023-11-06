/* eslint-disable no-unused-vars */
import React from 'react';

export default function Ad(props) {
  return (
    <>
      {props.watch && (
        <img src="/images/ad.png" alt="광고" style={{ width: '100%' }} />
      )}
    </>
  );
}
