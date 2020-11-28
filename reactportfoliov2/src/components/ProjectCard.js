import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
    return(
        <div className="border mb-4 rounded overflow-hidden">    
            
            <div>
                <h3><strong>Project name:</strong> {props.id}{props.name}</h3>
            </div>
            <div>
                <p>Description: {props.description}</p>
            </div>
            <a href={props.link} className="bg-blue-500 text-white p-2 flex justify-center w-full">
                Full Site
            </a>
            <a href= {props.github} className="bg-blue-500 text-white p-2 flex justify-center w-full">
                Github Repo
            </a>

            
        </div>
    )
}

export default ProjectCard;