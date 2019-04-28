import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  /* border-right: 1px solid rgba(255,255,255,0.02); */
  display: flex;
  flex-direction: column;
  background: ${colors.light0};
  width: 300px;
  height: 100vh;
  display: none;
`;

export const Logo = styled.h2`
  padding: 24px;
  color: ${colors.dark0};
  font-weight: 700;

  span {
    color: ${colors.dark0};
    font-weight: 300;
    margin-left: 3px;
    opacity: 0.75;
  }
`;

export const NavList = styled.div`
  color: ${colors.dark0};
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

export const NavItem = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  padding-left: 24px;
`;
