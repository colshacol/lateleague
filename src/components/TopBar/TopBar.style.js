import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #202037;
  width: 100vw;
  height: 60px;
  padding-left: calc(((100vw - 840px) / 2) + 24px);
  padding-right: calc(((100vw - 840px) / 2) + 24px);
  box-shadow: 0px 2px 16px -2px rgba(0, 0, 0, 0.15);
  z-index: 1;

  small {
    margin-left: auto;
    margin-right: 12px;
    font-family: "Dank Mono";
  }
  .isHomie {
    cursor: pointer;
    color: ${colors.accent0};
  }
`;

export const Logo = styled.h2`
  cursor: pointer;
  margin-right: auto;
  color: ${colors.light0};
  font-weight: 700;
  margin-left: 12px;

  span {
    color: ${colors.accent0};
    font-weight: 300;
    margin-left: 3px;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  color: ${colors.light0};
  background: ${colors.accent2};
  padding: 0 12px;
  height: 28px;
  font-size: 1.3rem;
  font-family: "Inter";
  color: ${colors.light0};
  border-radius: 2px;
  font-weight: 300;
  letter-spacing: 0.75px;
  font-style: italic;
  font-family: "Apex";
  text-transform: uppercase;

  transition: all 0.3s;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.35);
  }
`;
