import React, {Component, createRef} from 'react'

//CSS
import './App.css'
import './Components/animation.css'

//Components
import Formulaire from './Components/Formulaire.js'
import Message from './Components/Message.js'
import './Components/loading.css'

//Animation
import {
    CSSTransition,
    TransitionGroup
} from "react-transition-group";


const time = {
    timeNow: ''
}

class App extends Component {

    state = {
        time,

        messages: {},
        // Get pseudo with Router (params)
        pseudo: this.props.match.params.pseudo,

        login: true
    }

    messagesRef = createRef()

// Cycle de vie de react
    componentDidMount = async () => {
        setInterval(() => {
            const time = {...this.state.time}
            const timeNow = new Date().toLocaleTimeString()
            time.timeNow = timeNow
            this.setState({time, login: false})
        }, 1000)
    }

    componentDidUpdate() {
        //Current -> ref au "className de la div message"
        const ref = this.messagesRef.current
        ref.scrollTop = ref.scrollHeight
    }

// Cycle de vie de react fin


    addMessage = message => {
        // Copie du state
        const messages = {...this.state.messages}
        //Rendre le message unique avec key
        messages[`message-` + Date.now()] = message
        this.setState({messages})


        //On boucle ici

        Object.keys(messages).slice(0, -5).forEach(key => {
            delete messages[key]
        })

        var count = 0
        for (var n in messages) {
            var count = count + 1;
        }
        console.log(count)
    }
//-----------------------------------------------------------------------------

    isUser = pseudo => {
        pseudo === this.state.pseudo
    }


    render() {
        const messages = Object.keys(this.state.messages).map(key => (
            <CSSTransition
                key={key}
                timeout={300}
                //props ClassNames
                classNames='fade'>
                <Message
                    message={this.state.messages[key].message}
                    pseudo={this.state.messages[key].pseudo}
                    isUser={this.isUser}
                />
            </CSSTransition>

        ))
        return (

            <div className='box'>
                <div>
                    <div className='messages' ref={this.messagesRef}>


                        <TransitionGroup
                            //Animation in "div" TransitionGroup
                            className='message'>
                            {messages}
                        </TransitionGroup>

                    </div>
                </div>
                <Formulaire
                    length={140}
                    pseudo={this.state.pseudo}
                    addMessage={this.addMessage}/>

                {this.state.login ?
                    <div
                        aria-busy="true"
                         aria-label="Loading"
                         role="progressbar"
                         className="container">
                        <div className="swing">
                            <div className="swing-l"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="swing-r"></div>
                        </div>
                        <div className="shadow">
                            <div className="shadow-l"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="shadow-r"></div>
                        </div>
                    </div>

                    : <p>{this.state.time.timeNow}</p>}
            </div>
        )
    }
}

export default App
