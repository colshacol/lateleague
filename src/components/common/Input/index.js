import * as React from 'react';

import * as Styled from './Input.style';

const useOnChange = ({ onChange }) => {
  return React.useCallback(event => onChange(event.target.value), [onChange]);
};

const ocs = [];

export const Input = props => {
  const onChange = useOnChange(props);

  return (
    <Styled.Container>
      <input
        value={props.value || ''}
        placeholder={props.placeholder}
        disabled={props.disabled}
        type={props.type}
        onChange={onChange}
      />
    </Styled.Container>
  );
};
