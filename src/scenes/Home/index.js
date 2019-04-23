import * as React from 'react';
import { Route } from 'react-router-dom';

import { BlockRankings } from './views/BlockRankings';
import * as Styled from './Home.style';

export const Home = props => {
  return (
    <Styled.Container>
      <Route path="/" exact component={BlockRankings} />
    </Styled.Container>
  );
};
