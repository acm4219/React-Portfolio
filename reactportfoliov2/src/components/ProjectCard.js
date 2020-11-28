import React from "react";
import { Link } from "react-router-dom";
function ProjectCard(props) {
    return(
        <div className="border mb-4 rounded overflow-hidden">    
            
            <div>
                <h3><strong>Project name:</strong> {props.name}</h3>
            </div>
            <div>
                <img alt={props.name} src={props.images} />
            </div>
            <div>
                <p>Description: {props.description}</p>
            </div>
            <Link to={`/projects/${props.id}`} className="bg-blue-500 text-white p-2 flex justify-center w-full">
                View
            </Link>

            
        </div>
    )
}

export default ProjectCard;