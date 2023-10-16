import React from 'react';
import * as H from '../style/header.style';

export default function Header() {
  return (
    <H.Container>
      <H.Logo to="/">
        <H.LogoText>TMBD</H.LogoText>
        <H.LogoRect />
      </H.Logo>
      <H.PageLink to="/movie">영화</H.PageLink>
      <H.PageLink to="/tv">TV프로그램</H.PageLink>
      <H.PageLink to="/person">인물</H.PageLink>
    </H.Container>
  );
}
