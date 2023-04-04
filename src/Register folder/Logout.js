import React from "react";
import {auth} from "../firebase"





function Logout() {
    

    const signOut =() =>{
        signOut(auth)
        
    }

    return(
        <button onClick ={() => auth.signOut()} className="button__style">
            Logout
        </button>
        
    )

}

export default Logout