import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo.svg'

class Banner extends React.Component {
  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Standup Roulette
        </Navbar.Brand>
      </Navbar>
    )
  }
}

export default Banner
