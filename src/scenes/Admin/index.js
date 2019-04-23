import * as React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";
import { Uploader } from "../../components/Uploader";
import { Input } from '../../components/common/Input';
import { GroupIdentifier } from './GroupIdentifier'
import * as Styled from "./Admin.style";

const hasAccess = auth => {
  return (
    auth.isAuthed &&
    ["levibluephillips@gmail.com", "colshacol@gmail.com"].includes(
      auth.profileObj.email
    )
  );
};

export const Admin = props => {
  const authContext = React.useContext(AuthContext);
  const { auth } = authContext;

  if (!hasAccess(auth)) {
    return <Redirect to="/" />;
  }

  return <AdminAllowed />;
};

class AdminAllowed extends React.Component {
  pond0 = React.createRef()
  pond1 = React.createRef()

  state = {
    identifier: '',
    file0: [],
    file1: []
  };

  onFile0 = (fileItems) => {
    this.setState({
      file0: fileItems.map(fileItem => fileItem.file)
    });
  };

  onFile1 = (fileItems) => {
    this.setState({
      file1: fileItems.map(fileItem => fileItem.file)
    });
  };

  onIdentifierChange = (identifier) => {
    this.setState({ identifier })
  }

  render() {
    return (
      <Styled.Container>
        <h2>ADMIN</h2>
        <GroupIdentifier onIdentifierChange={this.onIdentifierChange} />
        <Uploader
          files={this.state.file0}
          currentRef={this.pond0}
          handleFiles={this.onFile0}
          identifier={this.state.identifier}
          filename='screen0'
        />
        <Uploader
          files={this.state.file1}
          currentRef={this.pond1}
          handleFiles={this.onFile1}
          identifier={this.state.identifier}
          filename='screen1'
        />
        <Styled.SubmitButton>Submit</Styled.SubmitButton>
      </Styled.Container>
    );
  }
}
