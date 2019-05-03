import styled from 'styled-components'

import { colors } from '../../../../styles/colors'

export const BlockWrapper = styled.div`
  max-width: 320px;
  width: 100%;
  padding: 24px 0;
  margin: 0 auto;
`

export const ResultsCount = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  display: flex;
  color: ${colors.accent0};
`

export const Filters = styled.div`
  margin-bottom: 6px;
  margin-top: 12px;
  padding: 12px;
`

export const LeagueOptions = styled.div`
  display: flex;
  margin-top: 6px;

  > div:not(:last-of-type) {
    margin-right: 24px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100vw;
  max-width: 800px;

  ${BlockWrapper}:nth-of-type(odd) {
    background: ${colors.dark1};
  }
`
