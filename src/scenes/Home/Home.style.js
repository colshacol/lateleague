import styled from 'styled-components'

import { colors } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 12px auto;
  height: 100vh;
`

export const AdminLink = styled.a`
  color: ${colors.accent2};
  margin: 0px 12px;
`
