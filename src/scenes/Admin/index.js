import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth'
import { Uploader } from '../../components/Uploader'
import * as Styled from './Admin.style'

const hasAccess = (auth) => {
  return (
    auth.isAuthed &&
    ['levibluephillips@gmail.com', 'colshacol@gmail.com'].includes(
      auth.profileObj.email
    )
  )
}

export const Admin = (props) => {
  const authContext = React.useContext(AuthContext)
  const { auth } = authContext

  if (!hasAccess(auth)) {
    return <Redirect to="/" />
  }

  return <AdminAllowed />
}

class AdminAllowed extends React.Component {
  pond0 = React.createRef()

  state = {
    file0: []
  }

  onFile0 = (fileItems) => {
    this.setState({
      file0: fileItems.map((fileItem) => fileItem.file)
    })
  }

  render() {
    return (
      <Styled.Container>
        <h2>ADMIN</h2>
        <Uploader
          files={this.state.file0}
          currentRef={this.pond0}
          handleFiles={this.onFile0}
          maxFiles={1}
          filename="screen0"
        />
        <Styled.SubmitButton>Submit</Styled.SubmitButton>
      </Styled.Container>
    )
  }
}
