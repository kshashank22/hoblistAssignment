import {Component} from 'react'

class Counter extends Component {
  state = {count: 0}

  getDetails = async () => {
    const api =
      'https://api.themoviedb.org/3/search/movie?api_key=e8ccc676e299173067a80520c1fee405&query=Jack'
    const options = {
      method: 'GET',
    }
    const data = fetch(api, options)
    const response = await data.json()
    console.log(response)
  }

  onDecrease = () => {
    const {count} = this.state
    if (count === 0) {
      this.setState({count: 0})
    } else {
      this.setState({count: count - 1})
    }
  }

  onIncrease = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <div className="navSection">
          <h1>Movie Name</h1>
          <input type="text" className="input" />
          <button type="button">Search</button>
        </div>
        <h1>{count}</h1>
        <button type="button" onClick={this.onDecrease}>
          decrease
        </button>
        <button type="button" onClick={this.onIncrease}>
          Increase
        </button>
      </div>
    )
  }
}

export default Counter
