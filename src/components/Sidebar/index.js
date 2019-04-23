import * as React from 'react';

import * as Styled from './Sidebar.style';

export const Sidebar = props => {
  return (
    <Styled.Container>
      {/* <Styled.Logo>
        LATE
        <br />
        <span>LEAGUE</span>
      </Styled.Logo> */}
      <Styled.Logo>
        LATE<span>LEAGUE</span>
      </Styled.Logo>
      <Styled.NavList>
        <Styled.NavItem>
          <p>Home</p>
        </Styled.NavItem>
        <Styled.NavItem>
          <p>Blah</p>
        </Styled.NavItem>
        <Styled.NavItem>
          <p>Foo Bar</p>
        </Styled.NavItem>
      </Styled.NavList>
    </Styled.Container>
  );
};
