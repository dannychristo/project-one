import Profile from "./Profile";
import Privacy from "./Privacy";
import React from "react";
import "./ProfileContent.css"
import { Link } from "react-router-dom";
import Logout from "../Register folder/Logout";

function ProfileContent () {

    return(
            <div className="content__Container">
                <div className="content__Style">
                <Profile/>
                <Privacy/>



                <Link to = "/Gasprice">
                <button>
                button to gas price
            </button>
            </Link>
            <div>
            <Logout/>
            </div>
            
    </div>
</div>
      
    )
}

export default ProfileContent