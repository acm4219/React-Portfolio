import React from "react";
import projects from "../projects.json"
import ProjectCard from "../components/ProjectCard"


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