import * as React from 'react';

import * as Layout from '../common/Layout';
import * as Styled from './RankBlock.style';

export const RankBlock = props => {
  return (
    <Styled.Container>
      <Layout.Row>
        <Styled.Avatar avatar={props.avatar} />
        <Styled.Name>{props.name}</Styled.Name>
        <Styled.League league={props.league}>{props.league}</Styled.League>
        <Styled.ContactIcons>
          <Styled.TwitchIcon url={props.twitch} />
        </Styled.ContactIcons>
      </Layout.Row>
      <Layout.Column>
        <Styled.Stats>
          <Styled.Stat>
            <Styled.Label>rank</Styled.Label>
            <Styled.Data>{props.rank}</Styled.Data>
          </Styled.Stat>

          <Styled.Stat>
            <Styled.Label>lp</Styled.Label>
            <Styled.Data>{props.lp}</Styled.Data>
          </Styled.Stat>

          <Styled.Stat>
            <Styled.Label>streak</Styled.Label>
            <Styled.Data>{props.streak}</Styled.Data>
          </Styled.Stat>

          <Styled.Stat>
            <Styled.Label>win</Styled.Label>
            <Styled.Data>{props.win}</Styled.Data>
          </Styled.Stat>

          <Styled.Stat>
            <Styled.Label>loss</Styled.Label>
            <Styled.Data>{props.loss}</Styled.Data>
          </Styled.Stat>

          <Styled.Stat>
            <Styled.Label>mmr</Styled.Label>
            <Styled.Data>{props.mmr}</Styled.Data>
          </Styled.Stat>
        </Styled.Stats>
      </Layout.Column>
    </Styled.Container>
  );
};

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
