import React from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import projects from "../projects.json"
import ProjectCard from "../components/ProjectCard"


function Project(){
   

    return (
       <div>
           <ProjectCard 
             name= {projects[0].name}
           />
       </div>
    )
}

export default Project;