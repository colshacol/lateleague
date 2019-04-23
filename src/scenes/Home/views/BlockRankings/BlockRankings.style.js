import styled from 'styled-components';

import { colors } from '../../../../styles/colors';

export const BlockWrapper = styled.div`
  max-width: 635px;
  padding: 18px 0 12px;
  margin-bottom: 24px;
`;

export const ResultsCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  color: ${colors.accent0};
`;

export const Filters = styled.div`
  margin-bottom: 24px;
`;

export const LeagueOptions = styled.div`
  display: flex;
  margin-top: 6px;

  > div:not(:last-of-type) {
    margin-right: 24px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 48px;
  margin: 0 auto;
  width: 732px;

  ${BlockWrapper}:nth-of-type(odd) {
    background: rgba(255, 255, 255, 0.05);
  }
`;
