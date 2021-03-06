import React from 'react';
import Nav from "./Nav";
function Header() {
    return (
        <header className="border-b p-3 flex bg-blue-500 justify-between items-center">
           <span className="font-bold">Alexander McDonald</span> 
           <span className="font-bold text-blue-900 hover:text-blue-300"><a href="https://github.com/acm4219">Github</a></span>
           <span className="font-bold text-blue-900 hover:text-blue-300"><a href="https://www.linkedin.com/in/alexander-mcdonald-80b52a166/">LinkedIn</a></span>
           <span className="font-bold text-blue-900 hover:text-blue-300"><a href="https://docs.google.com/document/d/1NAkbvXWE4RRzWK9Uq1Uqlz-iJCPX5mVleTTRK_GvrxY/edit?usp=sharing">Resume</a></span>

            <Nav />
        </header>
    )
}

export default Header;