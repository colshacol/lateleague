import * as React from 'react'
import { Route, withRouter } from 'react-router-dom'

import { AuthContext } from '../../contexts/Auth'
import { BlockRankings } from './views/BlockRankings'
import * as Styled from './Home.style'

export const Home = (props) => {
  const authContext = React.useContext(AuthContext)

  return (
    <Styled.Container>
      {authContext.auth.isAuthed && <AdminLink>ADMIN</AdminLink>}
      <Route path="/" exact component={BlockRankings} />
    </Styled.Container>
  )
}

const handleHomie = (props, auth) => {
  const isHomie = [
    'levibluephillips@gmail.com',
    'colshacol@gmail.com'
  ].includes(auth.profileObj.email)

  const onClick = isHomie ? () => props.history.push('/admin') : () => {}
  const className = isHomie ? 'isHomie' : 'notHomie'

  return { onClick, className }
}

const AdminLink = withRouter((props) => {
  const authContext = React.useContext(AuthContext)

  if (authContext.auth.isAuthed) {
    const homie = handleHomie(props, authContext.auth)
    return <Styled.AdminLink {...homie}>ADMIN DASHBOARD</Styled.AdminLink>
  }

  return null
})
