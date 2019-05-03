import styled from 'styled-components'

import { colors } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.dark0};
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 16px;
    display: none;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-track:hover {
    background: rgba(0, 0, 0, 0.15);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.accent0};
  }
`
