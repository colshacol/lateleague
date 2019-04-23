import styled from 'styled-components';

export const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.xAlign || 'flex-start'};
  align-items: ${props => props.yAlign || 'flex-start'};
  width: ${props => props.width || '100%'};
`;

export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.yAlign || 'flex-start'};
  align-items: ${props => props.xAlign || 'flex-start'};
  width: ${props => props.width || '100%'};
`;
