import React from "react";
import Chat2Style from "./ChatPage.module.css";
import Input from "./Input";

import VideocamIcon from '@mui/icons-material/Videocam';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Messages from "./Messages";
import { useContext } from "react";
import { ChatContext } from "../Context folder/ChatContext";



function ChatPage() {

    const {data}= useContext(ChatContext);

    return(
        <div className={Chat2Style.chat}>
            <div className={Chat2Style.chatInfo}>
                <span className={Chat2Style.chatInfoSpan}>{data.user?.displayName}</span>
                <div className={Chat2Style.chatIcons}>
                    <VideocamIcon className={Chat2Style.Icons}/>                    
                    <PersonAddIcon className={Chat2Style.Icons}/>
                    <MoreHorizIcon className={Chat2Style.Icons}/>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default ChatPage