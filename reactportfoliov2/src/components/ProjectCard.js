import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
    return(
        <div className="container bg-gray-100 border mb-4 rounded overflow-hidden max-w-6xl ">    
            
            <div>
                <h1 className="text-2xl font-bold">{props.name}</h1>
            </div>
            <br />
            <div>
                <img alt={props.name} src={props.images} />
            </div>
            <br />
            <div>
                <p className="text-lg">Description: {props.description}</p>
            </div>
            <br />
            <div className="flex-wrap" >
            <a href={props.link} className="bg-blue-500 hover:bg-blue-300 text-white p-2 flex justify-center w-md ">
                Full Site
            </a>
            <a href= {props.github} className="bg-blue-500 hover:bg-blue-300 text-white p-2 flex justify-center w-md">
                Github Repo
            </a>
            </div>

            
        </div>
    )
}

export default ProjectCard;