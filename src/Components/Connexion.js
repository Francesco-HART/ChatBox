import React, {Component} from 'react'

//Add au router
import {Redirect} from 'react-router-dom'

class Connexion extends Component {
  state = {
    pseudo: '',
    goToChat: false
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({pseudo})
    console.log(this.state.pseudo)
  }
  goToChat = event => {
    event.preventDefault()
    this.setState({goToChat: true})
  } 

    render(){
      
      if(this.state.goToChat){
        return <Redirect to={`/pseudo/`+this.state.pseudo}> </Redirect>
      }


      return(
        <div>
            <form className="connexion" onSubmit = {this.goToChat}>
              <input
              value= {this.state.pseudo}
              onChange = {this.handleChange}
              placeholder='Pseaudo'
              types = "text" 
              requireds
              />
              <button types="submit"> login </button>
            </form>
        </div>
      )
    }
    
}

export default Connexion