import React from "react"
import Sidebar from "./Sidebar"
import HomeStyle from "./Home.module.css"
import ChatPage from "./ChatPage"


function Home() {
    return(
        <div className={HomeStyle.home}>
            <div className={HomeStyle.container}>
                <Sidebar/>
                <ChatPage/>

            </div>
        </div>
    )
}

export default Home