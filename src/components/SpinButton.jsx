import React from 'react'
import Button from 'react-bootstrap/Button'

class SpinButton extends React.Component {
  render() {
    return (
      <Button variant="primary" size="lg" block style={{
        position: 'fixed',
        bottom: 0,
      }} onClick={this.props.onClick}>
        SPIN
      </Button>
    )
  }
}

export default SpinButton
