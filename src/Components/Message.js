import React, {Fragment} from 'react'

const Message = ({pseudo, message, isUser}) => {
    return (
        isUser(pseudo) ?

                <p className='not-user-message'>
                    {message}
                </p>

                 :

                <p className='user-message'>
                    {message}
                </p>
    )
}

export default Message