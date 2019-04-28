import * as React from 'react';

import { Checkbox } from '../../../../../components/common/Checkbox';
// import * as Layout from '../../../../../components/common/Layout';

import * as Styled from './LeagueFilters.style';

export const LeagueFilters = props => {
  const [state, setState] = React.useState([]);

  const toggleFilter = filter => {
    const newState = state.includes(filter)
      ? state.filter(item => item !== filter)
      : [...state, filter];

    setState(newState);
    props.onChange(newState);
  };

  return (
    <Styled.Container>
      <Styled.Label>League</Styled.Label>
      <Checkbox
        isChecked={state.includes('silver')}
        label="Silver"
        onClick={() => toggleFilter('silver')}
      />
      <Checkbox
        isChecked={state.includes('bronze')}
        label="Bronze"
        onClick={() => toggleFilter('bronze')}
      />
      <Checkbox
        isChecked={state.includes('placements')}
        label="Placements"
        onClick={() => toggleFilter('placements')}
      />
    </Styled.Container>
  );
};
