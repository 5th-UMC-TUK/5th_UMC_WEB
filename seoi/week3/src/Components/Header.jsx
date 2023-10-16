import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: '#032541',
        display: 'flex',
        width: '100vw',
        height: '50px',
        alignItems: 'center',
        paddingLeft: '50px',
        marginBottom: '20px',
      }}
    >
      <Link to="/">
        <img
          style={{ width: '154px', height: '20px' }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <Link
        to="/movie"
        style={{
          color: 'white',
          marginLeft: '20px',
          textDecoration: 'none',
        }}
      >
        영화
      </Link>
      <Link
        to="/tv"
        style={{
          color: 'white',
          marginLeft: '20px',
          textDecoration: 'none',
        }}
      >
        TV 프로그램
      </Link>
      <Link
        to="/person"
        style={{
          color: 'white',
          marginLeft: '20px',
          textDecoration: 'none',
        }}
      >
        인물
      </Link>
    </div>
  );
}
