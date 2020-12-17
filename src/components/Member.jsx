import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

class Member extends React.Component {
  render() {
    return (
      <Container style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        <Image
          src={this.props.image}
          width={250}
          height={250}
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          roundedCircle
        />
        <p className="text-center">
          {this.props.name}
        </p>
      </Container>
    )
  }
}

export default Member
