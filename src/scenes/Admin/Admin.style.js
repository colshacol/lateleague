import styled from 'styled-components'

import { colors } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 24px 48px;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;

  h2 {
    margin-bottom: 24px;
  }

  > p {
    margin: 24px 0;
  }
`

export const FileList = styled.div`
  margin: 12px 0;
`

export const DropZone = styled.div`
  background: rgba(255, 255, 255, 0.025);
  border: 3px dashed rgba(255, 255, 255, 0.25);
  padding: 40px 60px;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Inter';

  ul {
    width: 100%;
  }
`

export const SubmitButton = styled.button`
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  color: ${colors.light0};
  background: ${colors.accent2};
  padding: 0 12px;
  height: 28px;
  font-size: 1.3rem;
  font-family: 'Inter';
  color: ${colors.light0};
  border-radius: 2px;
  font-weight: 300;
  letter-spacing: 0.75px;
  font-style: italic;
  font-family: 'Apex';
  text-transform: uppercase;
  margin-left: auto;

  transition: all 0.3s;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.35);
  }
`
