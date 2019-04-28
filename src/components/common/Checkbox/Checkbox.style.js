import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const Checkbox = styled.div.attrs({
  'data-iscomp': 'Checkbox',
})`
  background: ${props => (props.isChecked ? colors.accent0 : colors.dark1)};
  border-radius: ${props => (props.isChecked ? '0px' : '2px')};
  display: flex;
  width: 16px;
  height: 16px;
`;

export const Label = styled.p``;

export const Container = styled.div`
  display: flex;

  ${Checkbox} {
    margin-right: 16px;
  }
`;
