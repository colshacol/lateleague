import styled from "styled-components";

import { colors } from "../../../styles/colors";

export const Container = styled.div.attrs({
  "data-iscomp": "Input"
})`
  background: ${colors.dark1};
  padding: 6px 14px;
  width: 160px;
  height: 28px;
  border-radius: 2px;
  overflow: hidden;

  &:focus-within {
    border: 2px solid ${colors.accent2};
    padding: 4px 12px;
  }

  input {
    border-radius: 2px;
    border: none;
    outline: none;
    padding: 0px 12px 0px 0px;
    font-size: 1.3rem;
    font-family: "Inter";
    color: ${colors.light0};
    width: 100%;

    font-weight: 300;
    letter-spacing: 1px;
    background: transparent;
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
      opacity: 0.5;
      font-weight: 300;
      letter-spacing: 1px;
    }
  }
`;
