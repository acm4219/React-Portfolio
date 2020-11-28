import React from "react";

function About(){
    return (
        <div className="bg-blue-200">
             <h1 className="font-bold text-2xl mb-3">Contact Information</h1>
             <div className="container bg-gray-100 border mb-4 rounded overflow-hidden max-w-6xl">
                <p className="text-2xl font-bold">My Email: </p>
                <a className="text-xl text-blue-500 hover:text-blue-300" href = "mailto: acm4219@gmail.com">acm4219@gmail.com</a>
                <p className="text-2xl font-bold">My Phone Number: </p>
                <p className="text-xl text-blue-500">763-614-8255</p>
                <p className="text-2xl font-bold">Git Hub: </p>
                <a className="text-xl text-blue-500 hover:text-blue-300" href="https://github.com/acm4219">acm4219</a>
                <p className="text-2xl font-bold">LinkedIn:</p>
                 <a className="text-xl text-blue-500 hover:text-blue-300" href="https://www.linkedin.com/in/alexander-mcdonald-80b52a166/">Alexander McDonald Profile</a>
            </div>
        </div>
    )
}

export default About