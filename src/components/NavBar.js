import React from "react";
import { Link } from "react-router-dom";


function NavBar(){

    return(
        <nav className="navbar">
            <h2>HobbyHub</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create Post</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;