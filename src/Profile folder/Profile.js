import React, { useState } from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import "./Profile.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from "react-router-dom";

function Profile() {
    const [name, setName] =useState("");
    const [selectedFile, setselectedFile] = useState(null);

    return(
        <Link to={"/Profile_picture"}>
            <div className="profile__container"> 
                    <ModeEditIcon className = "add__photo"fontSize="medium"/>              
        <p className="profile__text"> 
            Profiles
       </p> 
       <ChevronRightIcon fontSize="large"/>
       </div> 
</Link>
        
        

          

    );
};
export default Profile;

//<input        type= "file" value={selectedFile}onChange = {(e) => selectedFile(e.target.files[0])}/>