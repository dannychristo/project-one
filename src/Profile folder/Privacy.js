import React from "react"
import "./Profile.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SecurityIcon from '@mui/icons-material/Security';
import { Link } from "react-router-dom";



function Privacy() {

    return(
        <Link to={"/Profile_picture"}>
        <div className="profile__container"> 
                <SecurityIcon className = "add__photo"fontSize="medium"/>              
    <p className="profile__text"> 
        Security & Privacy
   </p> 
   <ChevronRightIcon fontSize="large"/>
   </div> 
</Link>
    )
}

export default Privacy