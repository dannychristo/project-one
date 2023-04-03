import React, { useContext, useEffect, useRef } from "react"
import MessageStyle from "./Message.module.css"
import { AuthContext } from "../Context folder/AuthContext"
import { ChatContext } from "../Context folder/ChatContext"
import { Avatar } from "@mui/material"

function Message({message}) {

    const {currentUser} = useContext(AuthContext)
    const{data} = useContext(ChatContext)
    const ref = useRef()

    useEffect(() => {
        ref.current?.scrollIntoView({})
    },[message]);


    console.log()
    return(
        

        // message.senderId === currentUser.uid ? (

        //     <div className="chatScreen__message">
        //     <p className="chatScreen__textUser">{message.text}</p>
        // </div>
        // ) : (
        
        // <div className="chatScreen__message">
        //     <Avatar
        //     className="chatscreen__image"
        //     alt={message.name}
        //     src={message.image}
        //     />
        //     <p className="chatScreen__text">{message.text}</p>
        // </div>)

        message.senderId === currentUser.uid ? (

        <div ref={ref} className={MessageStyle.messageOwner}>
            <div className={MessageStyle.messageInfo}>
                <Avatar className= {MessageStyle.messageInfoImg}
                src={currentUser.photoURL}
                alt={currentUser.displayName}/>
                <span>just now</span>
        </div>
            <div className={MessageStyle.messageContentOwner}>
            <p className={MessageStyle.paragraphOwner}>{message.text}</p>
            { message.image && <img className={MessageStyle.messageContentImg} 
                 src={message.image} alt=""/>}
            </div>
        </div> 
        ):( 
        
        <div className={MessageStyle.message}>
            <div className={MessageStyle.messageInfo}>
                <Avatar className= {MessageStyle.messageInfoImg}
                src={data.user.photoURL}
                alt={data.user.displayName}/>
                <span>just now</span>
        </div>
            <div className={MessageStyle.messageContent}>
            <p className={MessageStyle.paragraph}>{message.text}</p>
            { message.image && <img className={MessageStyle.messageContentImg} 
                 src={message.image} alt=""/>}
            </div>
        </div> 
        )






        // <div className={MessageStyle.message}>
        //     <div className={MessageStyle.messageInfo}>
        //         <img className={MessageStyle.messageInfoImg}
        //          src="" alt="name"/>
        //         <span>{message.id}</span>
        //     </div>
        //     <div className={MessageStyle.messageContent}>
        //         <p className={MessageStyle.paragraph}>{message.text}</p>
        //         { message.image && <img className={MessageStyle.messageContentImg} 
        //         src={message.image} alt="name"/>}
        //     </div>
        // </div>
    )
}

export default Message