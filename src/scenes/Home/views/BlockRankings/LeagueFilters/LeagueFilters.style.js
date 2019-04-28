import styled from 'styled-components';

import { colors } from '../../../../../styles/colors';

export const Container = styled.div`
  display: flex;
  margin-top: 6px;

  [data-iscomp='Checkbox'] {
    margin-left: 24px;
  }
`;

export const Label = styled.div`
  opacity: 0.5;
  font-style: italic;
`;
