import React from "react";
import projects from "../projects.json"
import Loader from "../components/Loader";
import ProjectCard from "../components/ProjectCard"
import { useAxiosGet } from "../hooks/HttpRequests";

function Home(){
    
    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">
                Recent Projects
            </h1>
            <div>
           <ProjectCard 
             name= {projects[0].name}
             description = {projects[0].description}
           />
       </div>
           
        </div>
    )
}

export default Home