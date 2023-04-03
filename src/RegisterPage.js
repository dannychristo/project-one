import React from "react";
import Register from "./Register folder/Register";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Logout from "./Register folder/Logout";



function RegisterPage() {
    
    const [user] = useAuthState(auth)
    console.log(user)
    

    return(
        <div className="navbar__Style">
            <Register/>
            <Logout/>
           </div>
    )
}


export default RegisterPage