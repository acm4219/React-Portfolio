import React from "react";
import { Link } from "react-router-dom";

function Jumbotron(){
    return(
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Alexander McDonald Portfolio</h1>
                <hr />
                <Link className="btn btn-primary btn-lg" to="/home">Check it out!</Link>
            </div>
        </div>
    )
}

export default Jumbotron;