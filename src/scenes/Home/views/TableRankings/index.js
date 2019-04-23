import * as React from 'react';

import rankData from '../../../../mockData';

import * as Styled from './TableRankings.style';

export const TableRankings = props => {
  return (
    <Styled.Container>
      <Styled.Headers>
        <Styled.NameCell isHeader>Name</Styled.NameCell>
        <Styled.LeagueCell isHeader>League</Styled.LeagueCell>
        <Styled.RankCell isHeader>Rank</Styled.RankCell>
        <Styled.LPCell isHeader>LP</Styled.LPCell>
        <Styled.StreakCell isHeader>Streak</Styled.StreakCell>
        <Styled.WinCell isHeader>P/Win</Styled.WinCell>
        <Styled.LossCell isHeader>P/Loss</Styled.LossCell>
        <Styled.MMRCell isHeader>MMR</Styled.MMRCell>
      </Styled.Headers>
      <Styled.Rows>
        {rankData.map(player => (
          <Styled.Row key={player.name}>
            <Styled.NameCell>{player.name}</Styled.NameCell>
            <Styled.LeagueCell>{player.league}</Styled.LeagueCell>
            <Styled.RankCell>{player.rank}</Styled.RankCell>
            <Styled.LPCell>{player.lp}</Styled.LPCell>
            <Styled.StreakCell>{player.streak}</Styled.StreakCell>
            <Styled.WinCell>{player.win}</Styled.WinCell>
            <Styled.LossCell>{player.loss}</Styled.LossCell>
            <Styled.MMRCell>{player.mmr}</Styled.MMRCell>
          </Styled.Row>
        ))}
      </Styled.Rows>
    </Styled.Container>
  );
};
