import React, { Component } from 'react'
import './App.css'


const time = {
  timeNow: ''}

class App extends Component {
  state = {
    time
  }

  componentDidMount(){
  setInterval(() => {
    const time = { ...this.state.time}
    const timeNow = new Date().toLocaleTimeString()
    time.timeNow = timeNow
   this.setState({time}) 
     }, 1000)
}
  render () {
    return (
      <div className='box'>
      <h1> {this.state.time.timeNow} </h1>
      </div>
    )
  }
}

export default App
