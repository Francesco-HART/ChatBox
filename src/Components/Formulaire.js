import React, {Component, Fragment} from 'react'
import Message from "./Message";

class Formulaire extends Component{

  state = {
        message: '',
        length: this.props.length,

  }

  creatMessage = () => {
    const { addMessage, pseudo} = this.props
    const message = {
        pseudo,

        message: this.state.message,
    }
    addMessage(message)
    //Reset
    this.setState({message :  ''})
  }


 handleSubmit = event => {
    //I have directive
        event.preventDefault()
        const lenght = this.props.length
        this.creatMessage()
        this.setState({  lenght })
    //Message(this.state.message)
  }


  handleChange = event => {
        console.log(this.state.toSend)
        const message = event.target.value
        const lenght = this.props.length - (message.length)
        this.setState({ message, lenght })
  }
    handleKeyUp = event => {
      if (event.key === 'Enter'){
          this.creatMessage()
      }
    }


  render(){
    return(
      <form
          className= 'form'
          onSubmit= {this.handleSubmit}
      >
        <textarea 
          value= {this.state.message}
          onChange= { this.handleChange}
          onKeyUp={this.handleKeyUp}
          required maxLength= {this.props.length} />
        <div className = 'info'> {this.state.lenght} </div>
        <button type = 'submit'>
          Send Message :
        </button>
      </form>
    )
  }
}

export default Formulaire