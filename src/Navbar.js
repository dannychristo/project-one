import React from "react";
import Signin from "./Signin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Logout from "./Logout";
import {Link} from "react-router-dom"


function Navbar() {
    const [user] = useAuthState(auth)
    console.log(user)

    return(
        <div>
            <div className="Navigation__style">
            <h1 className="Heading__style"></h1>
            {user ? <Logout/> : <Signin/>}
            </div>

        <Link to = "/Gasprice">
        <button>
           button to gas price
        </button>
        </Link>
        </div>
    )
}


export default Navbar