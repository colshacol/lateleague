import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

import { AuthContext } from '../../contexts/Auth'
import * as Styled from './TopBar.style'

const GOOGLE_CLIENT_ID =
  '637129562395-1nvs67j9f4t87v6ac58ojoqvjpfs7qbb.apps.googleusercontent.com'

export const TopBar = withRouter((props) => {
  const authContext = React.useContext(AuthContext)

  return (
    <Styled.Container>
      <Styled.Logo onClick={() => props.history.push('/')}>
        LATE<span>LEAGUE</span>
      </Styled.Logo>
      {/* <UserEmail /> */}
      {authContext.auth.isAuthed && (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          onLogoutSuccess={authContext.onLogoutSuccess}
          onSuccess={authContext.onLogoutSuccess}
          onFailure={authContext.onLogoutFailure}
          render={(_props) => (
            <Styled.LoginButton
              onClick={_props.onClick}
              disabled={_props.disabled}
            >
              Logout
            </Styled.LoginButton>
          )}
        />
      )}
      {!authContext.auth.isAuthed && (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          onSuccess={authContext.onSuccess}
          onFailure={authContext.onFailure}
          cookiePolicy="single_host_origin"
          render={(_props) => (
            <Styled.LoginButton
              onClick={_props.onClick}
              disabled={_props.disabled}
            >
              Login
            </Styled.LoginButton>
          )}
        />
      )}
    </Styled.Container>
  )
})

const handleHomie = (props, auth) => {
  const isHomie = [
    'levibluephillips@gmail.com',
    'colshacol@gmail.com'
  ].includes(auth.profileObj.email)

  const onClick = isHomie ? () => props.history.push('/admin') : () => {}
  const className = isHomie ? 'isHomie' : 'notHomie'

  return { onClick, className }
}

const UserEmail = withRouter((props) => {
  const authContext = React.useContext(AuthContext)

  if (authContext.auth.isAuthed) {
    const homie = handleHomie(props, authContext.auth)
    return <small {...homie}>{authContext.auth.profileObj.email}</small>
  }

  return null
})
