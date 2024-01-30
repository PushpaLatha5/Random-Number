import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: ''}

  generateNum = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.generateNum}>
            Generate
          </button>
          <p className="pa">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
