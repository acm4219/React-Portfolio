import React from "react";

function ContactInfo(){
    return(
        <div>
        <div className="container">
         <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img className="w-100 p-3 h-100 d-inline-block" src={process.env.PUBLIC_URL + "/photoAssets/Professional pic.JPG"} alt="professionalpic" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Contact Me</h5>
                        <p className="card-text"><a href="https://github.com/acm4219">Github</a></p>
                        <p className="card-text"><a href="https://www.linkedin.com/in/alexander-mcdonald-80b52a166/">LinkedIn</a></p>
                        <p className="card-text"><a href="https://docs.google.com/document/d/1NAkbvXWE4RRzWK9Uq1Uqlz-iJCPX5mVleTTRK_GvrxY/edit?usp=sharing">Resume</a></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
     </div>
    

    )
}

export default ContactInfo;