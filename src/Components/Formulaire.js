import React, {Component, Fragment} from 'react'


class Formulaire extends Component{

  state = {
    message: ''
  }

  creatMessage = () => {
    const { addMessage, pseudo} = this.props
    const message = {
      pseudo,
      message: this.state.message
    }
    addMessage(message)
    //Reset
this.setState({Message :  ''})

  }


 handleSubmit = event => {
    //I have directive
    event.preventDefault()
    this.creatMessage()
  }


  handleChange = event => {
    const message = event.target.value
    this.setState({ message })
  }


  render(){
    return(
      <form className= 'form'
      onSubmit= {this.handleSubmit}>
        <textarea 
          value= {this.state.message}
          onChange= { this.handleChange} 
          required maxLength= '140' />
        <div className = 'info'> 140 </div>
        <button type = 'submit'>
          Send Message
        </button>
      </form>
    )
  }
}

export default Formulaire