import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/home">Alex McDonald React-Portfolio</Link>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link active" to="/home">Projects</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/contact">Contact Me</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;