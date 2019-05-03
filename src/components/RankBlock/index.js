import * as React from 'react'

import * as Layout from '../common/Layout'
import * as Styled from './RankBlock.style'

// TODO: Show intuitive indicator of "losses until rank drop"

export const RankBlock = (props) => {
  const leagueAndRank =
    props.league === 'placements'
      ? 'PLACEMENTS'
      : `${props.league} ${props.rank}`

  return (
    <Styled.Container>
      <Layout.Column>
        <Layout.Row>
          <Styled.Name>
            <span>#{props.index}</span> {props.name}
          </Styled.Name>
        </Layout.Row>
        <Layout.Row yAlign="center">
          <Styled.League league={props.league}>{leagueAndRank}</Styled.League>
          <Styled.Stats>
            <Styled.Stat>
              <Styled.StatLabel>lp</Styled.StatLabel>
              <Styled.StatData>{props.lp}</Styled.StatData>
            </Styled.Stat>

            <Styled.Stat>
              <Styled.StatLabel>streak</Styled.StatLabel>
              <Styled.StatData>{props.streak}</Styled.StatData>
            </Styled.Stat>
          </Styled.Stats>
        </Layout.Row>
      </Layout.Column>
    </Styled.Container>
  )
}

// {
// name: 'The Corn Ninja',
// division: '#N/A',
// league: 'Silver',
// rank: 1,
// lp: 0,
// streak: -1,
// win: null,
// loss: null,
// mmr: 350,
// avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
// },
