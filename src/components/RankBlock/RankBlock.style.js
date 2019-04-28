import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const TwitchIcon = styled.img.attrs({
  src: '/images/twitch.svg',
})`
  max-width: 20px;
  fill: #fff;
  transition: all 0.3s;

  opacity: ${props => (props.url ? 0.75 : 0.1)};
  cursor: ${props => (props.url ? 'pointer' : 'not-allowed')};

  &:hover {
    transform: ${props => (props.url ? 'scale(1.15)' : 0)};
    opacity: ${props => (props.url ? 1 : 0.1)};
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  height: 24px;
  position: absolute;
  right: 24px;
  top: -6px;
`;

export const Name = styled.h3`
  margin-bottom: 2rem;
  margin-left: 48px;
  white-space: nowrap;
`;

export const League = styled.span`
  margin-left: 12px;
  font-family: 'ApexBold';
  padding-top: 8px;
  color: ${props => {
    if (props.league === 'bronze') return '#cd7f32'
    if (props.league === 'silver') return '#fbfbfb'
    return colors.accent2
  }};
`;

export const Avatar = styled.span`
  position: absolute;
  top: -6px;
  max-width: 100%;
  width: 36px;
  height: 36px;
  border-radius: 50px;
  margin-right: 16px;
  background-image: url(${props => props.avatar});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.75);
`;

export const Stat = styled.span`
  display: flex;
  flex-direction: column;
  width: 100px;
  text-align: center;
`;

export const Stats = styled.div`
  display: flex;
  max-width: 625px;
  padding: 8px 12px;
  transition: all 0.3s;

  background: rgba(255, 255, 255, 0);

  ${Stat}:not(:last-of-type) {
    border-right: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

export const Label = styled.span`
  font-size: 1.4rem;
  margin-bottom: 4px;
  color: ${colors.accent1};
`;

export const Data = styled.span`
  font-size: 1.6rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 635px;
  height: 100px;
  border-left: 2px solid ${colors.accent0};
  padding: 0px 12px 0px 14px;
  font-family: 'Dank Mono';
`;
