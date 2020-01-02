import React, { Component } from 'react'
import './App.css'
import Formulaire from './Components/Formulaire.js'
import Message from './Components/Message.js'

const time = {
  timeNow: ''
  }

class App extends Component {
 
  state = {
    time,

    messages: {},

    pseudo : this.props.match.params.pseudo
  }

  componentDidMount(){
  setInterval(() => {
    const time = { ...this.state.time}
    const timeNow = new Date().toLocaleTimeString()
    time.timeNow = timeNow
   this.setState({time}) 
     }, 1000)
}


  addMessage = message => {
    // Copie du state
    const messages  = {...this.state.messages}
    //Rendre le message unique
    messages[`message-`+Date.now()] = messages
    this.setState({ messages })
  }
//-----------------------------------------------------------------------------

  render () {
    return (
      
      <div className='box'>
      <h1> Time: {this.state.time.timeNow} </h1>
      <div>
          <div className= 'message'>
            <Message />
          </div>
        </div>
        <Formulaire 
        pseudo = {this.state.pseudo}
        addMessage = {this.addMessage}/>
      </div>
    )
  }
}

export default App
