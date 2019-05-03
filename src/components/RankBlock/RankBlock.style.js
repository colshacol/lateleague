import styled from 'styled-components'

import { colors } from '../../styles/colors'

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 18px;
  white-space: nowrap;

  span {
    opacity: 0.5;
    margin-right: 12px;
  }
`

export const League = styled.span`
  margin-top: 2px;
  width: 100px;
  margin-left: 12px;
  font-family: 'ApexBold';
  color: ${(props) => {
    if (props.league === 'bronze') return '#cd7f32'
    if (props.league === 'silver') return '#fbfbfb'
    return colors.accent2
  }};
`

export const Stat = styled.span`
  display: flex;
  margin: 0 12px;
`

export const Stats = styled.div`
  display: flex;
  padding-left: 12px;
  transition: all 0.3s;
  margin-left: 12px;

  ${Stat}:not(:last-of-type) {
    border-right: 1px solid rgba(255, 255, 255, 0.05);
  }
`

export const StatLabel = styled.span`
  font-size: 1.4rem;
  margin-right: 8px;
  color: ${colors.accent1};
`

export const StatData = styled.span`
  font-size: 1.6rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  font-family: 'Dank Mono';
  padding: 0px 12px;
  position: relative;
`
