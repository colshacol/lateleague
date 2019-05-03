import * as React from 'react'

import rankData from '../../../../mockData'

import { RankBlock } from '../../../../components/RankBlock'
import { Input } from '../../../../components/common/Input'
import * as Layout from '../../../../components/common/Layout'

import { LeagueFilters } from './LeagueFilters'
import { useState } from './state'
import * as Styled from './BlockRankings.style'

export const BlockRankings = (props) => {
  const [state, stateActions] = useState(rankData)

  return (
    <Styled.Container>
      <Styled.Filters>
        <Layout.Column>
          <LeagueFilters onChange={stateActions.setLeagues} />
          <Layout.Row style={{ marginTop: '12px' }} yAlign="center">
            <Input
              placeholder="Filter by Name"
              onChange={stateActions.setQuery}
              value={state.query}
            />
            <Styled.ResultsCount>
              {state.filteredPlayers.length} results
            </Styled.ResultsCount>
          </Layout.Row>
        </Layout.Column>
      </Styled.Filters>
      {state.filteredPlayers.map((player, index) => (
        <Styled.BlockWrapper key={player.name}>
          <RankBlock key={player.name} index={index} {...player} />
        </Styled.BlockWrapper>
      ))}
    </Styled.Container>
  )
}
