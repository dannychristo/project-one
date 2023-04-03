import React from "react"
import Chats from "./Chats"
import Search from "./Search"
import SidebarStyle from "./Sidebar.module.css"


function Sidebar() {
    return(
        <div className={SidebarStyle.sidebar}>
            <Search/>
            <Chats/>
            </div>
    )
}

export default Sidebar