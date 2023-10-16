import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: 'rgb(35, 37, 72)',
        padding: '10px 20%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          textDecoration: 'none',
        }}
      >
        <div
          style={{
            position: 'relative',
            fontSize: '20px',
            top: '1px',
            background: ' linear-gradient(to right, #2CC827 0%, #30FFD6 100%)',
            webkitBackgroundClip: 'text',
            webkitTextFillColor: 'transparent',
            fontWeight: '700',
            marginRight: '5px',
          }}
        >
          TMBD
        </div>
        <div
          style={{
            width: '40px',
            borderRadius: '10px',
            background:
              ' linear-gradient(180deg, rgba(48,255,214,1) 0%, rgba(27,208,221,1) 100%)',
          }}
        />
      </Link>
      <Link
        to="/movie"
        style={{ textDecoration: 'none', color: 'white', margin: '0px 20px' }}
      >
        영화
      </Link>
      <Link
        to="/tv"
        style={{ textDecoration: 'none', color: 'white', margin: '0px 20px' }}
      >
        TV프로그램
      </Link>
      <Link
        to="/person"
        style={{ textDecoration: 'none', color: 'white', margin: '0px 20px' }}
      >
        인물
      </Link>
    </div>
  );
}
