import * as React from 'react'

import * as Styled from './GroupIdentifier.style.js'
import { Input } from '../../../components/common/Input';

export class GroupIdentifier extends React.Component {
  state = {
    identifier: '',
  }

  setIdentifier = (identifier) => {
    this.setState({ identifier })
    this.props.onIdentifierChange(identifier)
  }

  render() {
    return (
      <Styled.Container>
        <h4>Create an Identifier</h4>
        <Input
          placeholder="Upload Identifier"
          onChange={this.setIdentifier}
          value={this.state.identifier}
        />
      </Styled.Container>
    )
  }
}