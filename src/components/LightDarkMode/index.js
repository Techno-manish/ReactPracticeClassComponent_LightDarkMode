// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: false}

  onStatusChange = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const onRenderBG = () => (isDark ? 'dark' : 'light')
    return (
      <div className="bgContainer">
        <div className={`card ${onRenderBG()}`}>
          <h1 className="mainHeading">Click To Change Mode</h1>
          <button
            type="button"
            className="button"
            onClick={this.onStatusChange}
          >
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
