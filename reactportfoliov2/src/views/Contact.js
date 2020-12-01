import React from "react";

function About(){
    return (
        <div className="bg-blue-200">
             <h1 className="font-bold text-2xl mb-3">Contact Information</h1>
             
             <div className="container flex p-3 bg-gray-100 border mb-4 rounded overflow-hidden max-w-6xl">
             <img className="w-72" alt="professional-pic" src={process.env.PUBLIC_URL + '/assets/photoAssets/Professional pic.JPG'} /> 
             
                <p className="text-2xl font-bold ml-4">My Email: <a className="text-xl text-blue-500 hover:text-blue-300" href = "mailto: acm4219@gmail.com">acm4219@gmail.com</a></p>
                
                <p className="text-2xl font-bold mr-10">Phone: <p className="text-xl text-blue-500">763-614-8255</p></p>
                
                <p className="text-2xl font-bold ml-2">GitHub: <a className="text-xl text-blue-500 hover:text-blue-300" href="https://github.com/acm4219">acm4219</a></p>
                
                <p className="text-2xl font-bold">LinkedIn: <br /><a className="text-xl text-blue-500 hover:text-blue-300" href="https://www.linkedin.com/in/alexander-mcdonald-80b52a166/">Alexander McDonald Profile</a></p>
                 
            </div>
        </div>
    )
}

export default About