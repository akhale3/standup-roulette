import React from 'react'
import Member from './Member'
import SpinButton from './SpinButton'
import logo from '../logo.svg'

class Body extends React.Component {
  state = {
    members: [{
      name: 'test1',
      image: logo,
    }, {
      name: 'test2',
      image: logo,
    }, {
      name: 'test3',
      image: logo,
    }, {
      name: 'test4',
      image: logo,
    }],
    name: null,
    image: null,
  }

  componentDidMount() {
    this.setStateWithRandomMember()
  }

  setStateWithRandomMember = () => {
    if (!this.state.members.length) {
      return
    }

    const minimumIndex = 0
    const maximumIndex = this.state.members.length
    const currentIndex = Math.floor(
      Math.random() * (maximumIndex - minimumIndex) + minimumIndex)

    const name = this.state.members[currentIndex].name
    const image = this.state.members[currentIndex].image

    this.setState({
      members: this.state.members.filter(member => member.name !== name),
      name,
      image,
    })
  }

  render() {
    return (
      <>
        <Member name={this.state.name} image={this.state.image} />
        <SpinButton onClick={this.setStateWithRandomMember} />
      </>
    )
  }
}

export default Body
