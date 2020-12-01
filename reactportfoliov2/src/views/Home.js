import React from "react";
import projects from "../projects.json"
import ProjectCard from "../components/ProjectCard"


function Home(){
    
    return (
        <div className="bg-blue-200">
            <h1 className="font-bold text-2xl mb-3">
                Recent Projects
            </h1>
            <div>
           
           <ProjectCard 
             name= {projects[0].name}
             images = {projects[0].images[0]}
             description = {projects[0].description}
             link= {projects[0].link}
             github= {projects[0].github}              
           />
           <ProjectCard 
             name= {projects[1].name}
             images = {projects[1].images}
             description = {projects[1].description} 
             link= {projects[1].link}
             github= {projects[1].github}             
           />
           <ProjectCard 
             name= {projects[2].name}
             images = {projects[2].images[0]}
             description = {projects[2].description} 
             link= {projects[2].link}
             github= {projects[2].github}             
           />
           <ProjectCard 
             name= {projects[3].name}
             images = {projects[3].images[0]}
             description = {projects[3].description}
             link= {projects[3].link}
             github= {projects[3].github}              
           />
           <ProjectCard 
             name= {projects[4].name}
             images = {projects[4].images}
             description = {projects[4].description} 
             link= {projects[4].link}
             github= {projects[4].github}             
           />
           <ProjectCard 
             name= {projects[5].name}
             images = {projects[5].images}
             description = {projects[5].description}
             link= {projects[5].link}
             github= {projects[5].github}              
           />
       </div>
           
        </div>
    )
}

export default Home