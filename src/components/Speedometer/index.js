// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onIncreaseSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecreaseSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="sm-bg">
        <h1 className="sm-main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="sm-img"
        />
        <h2 className="sm-speed">Speed is {speed}mph</h2>
        <p className="sm-description">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button
            className="sm-accelerate sm-button"
            type="button"
            onClick={this.onIncreaseSpeed}
          >
            Accelerate
          </button>
          <button
            className="sm-break sm-button"
            type="button"
            onClick={this.onDecreaseSpeed}
          >
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
