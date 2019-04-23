import styled from 'styled-components';

import { colors } from '../../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  margin: 0 auto;
`;

export const Headers = styled.div`
  display: flex;
`;

export const Header = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
`;

const Cell = styled.span`
  padding: 2px 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  font-size: ${props => (props.isHeader ? '14px' : '16px')};
`;

const NonNameCell = styled(Cell)`
  display: flex;
  justify-content: center;
  font-family: 'Inter';
  font-size: 1.2rem;
`;

export const NameCell = styled(Cell)`
  min-width: 200px;
`;

export const LeagueCell = styled(NonNameCell)`
  min-width: 140px;
`;

export const RankCell = styled(NonNameCell)`
  min-width: 80px;
`;

export const LPCell = styled(NonNameCell)`
  min-width: 80px;
`;

export const StreakCell = styled(NonNameCell)`
  min-width: 80px;
`;

export const WinCell = styled(NonNameCell)`
  min-width: 80px;
`;

export const LossCell = styled(NonNameCell)`
  min-width: 80px;
`;

export const MMRCell = styled(NonNameCell)`
  min-width: 100px;
`;
