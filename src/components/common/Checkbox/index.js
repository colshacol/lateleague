import * as React from 'react';

import * as Styled from './Checkbox.style';

export const Checkbox = props => {
  return (
    <Styled.Container onClick={props.onClick}>
      <Styled.Checkbox isChecked={props.isChecked} />
      <Styled.Label>{props.label}</Styled.Label>
    </Styled.Container>
  );
};
