import * as React from 'react';

import rankData from '../../../../mockData';

import { RankBlock } from '../../../../components/RankBlock';
import { Input } from '../../../../components/common/Input';
import * as Layout from '../../../../components/common/Layout';

import { LeagueFilters } from './LeagueFilters';
import { useState } from './state';
import * as Styled from './BlockRankings.style';

export const BlockRankings = props => {
  const [state, stateActions] = useState(rankData);

  return (
    <Styled.Container>
      <Styled.Filters>
        <Layout.Column>
          <Layout.Row xAlign="space-between" yAlign="space-between">
            <Input
              placeholder="Filter by Name"
              onChange={stateActions.setQuery}
              value={state.query}
            />
            <LeagueFilters onChange={stateActions.setLeagues} />
          </Layout.Row>
          <Styled.ResultsCount>
            {state.filteredPlayers.length} results
          </Styled.ResultsCount>
        </Layout.Column>
      </Styled.Filters>
      {state.filteredPlayers.map(player => (
        <Styled.BlockWrapper key={player.name}>
          <RankBlock key={player.name} {...player} />
        </Styled.BlockWrapper>
      ))}
    </Styled.Container>
  );
};
