import React from "react";

function ProjectCard(){
    return(
        <div>
            <div className="container">
                <div className="card">
                <h3 className="card-title">Recent Projects</h3>
                <hr />   
                    <img className="w-75 p-3 h-75 d-inline-block" src={process.env.PUBLIC_URL + "/photoAssets/dadjokes1.JPG"} alt="Dadjokes1" />
                    <h5 className="card-title pl-1">Dad Jokes!</h5>
                        <hr />
                    <div className="card-body">
                        <p>Do you ever feel that there aren't enough dad jokes in the world? Do you want to do your part to get more out there for people to see? Then the Dad Jokes! site is perfect for you. Add, rate and view other people's jokes with our intuitive bar of jokes. When you're done you can simply log out and come back later to see if the ratings have changed on your joke. You can become the Dadliest Dad out there with Dad Jokes!</p>
                        
                    </div>
                    <hr />
                        <a type="button" className="btn btn-info" href="https://github.com/acm4219/peony">Github Repo</a>
                        <a type="button" className="btn btn-info" href="https://vast-gorge-32848.herokuapp.com/">Live Site</a>
                        <br />
                </div>
                <div className="card">
                <img className="w-75 p-3 h-75 d-inline-block" src={process.env.PUBLIC_URL + "/photoAssets/employeetracker.JPG"} alt="employee-tracker" />
                <h5 className="card-title pl-1">My Employee Tracker</h5>
                        <hr />
                    <div className="card-body">
                        <p>This application is a recording application to keep track of your employee records. With this application you'll be able to view your employees, view the departments they're in, add more employees, update their info and remove them if needed. The CLI is really streamlined with a simple to use interface that anyone can use.</p>
                    </div>
                    <hr />
                        <a type="button" className="btn btn-info" href="https://github.com/acm4219/My-Employee-Tracker">Github Repo</a>
                        <a type="button" className="btn btn-info" href="https://acm4219.github.io/My-Employee-Tracker/MyEmployeeTrackerDemo.mp4">Live Demo</a>
                        <br />
                </div>
                <div className="card">
                <img className="w-75 p-3 h-75 d-inline-block" src={process.env.PUBLIC_URL + "/photoAssets/NoteTaker2.JPG"} alt="NoteTaker" />
                <h5 className="card-title pl-1">Note Taker App</h5>
                        <hr />
                    <div className="card-body">
                        <p>This application can be utilized to take notes and keep them saved on yur desktop. When you enter the application you can get started with a click of a button and begin to write notes on the following page. After you write them out you can save it and start writing more notes. It's fun for everyone!</p>
                    </div>
                    <hr />
                        <a type="button" className="btn btn-info" href="https://github.com/acm4219/TakeMyNotesApp">Github Repo</a>
                        <a type="button" className="btn btn-info" href="https://whispering-gorge-41182.herokuapp.com/">Live Site</a>
                        <br />
                </div>
                <div className="card">
                <img className="w-75 p-3 h-75 d-inline-block" src={process.env.PUBLIC_URL + "/photoAssets/movie-hub-search.JPG"} alt="MovieHub" />
                <h5 className="card-title pl-1">Movie Hub</h5>
                        <hr />
                    <div className="card-body">
                        <p>Welcome to Movie Hub! Where you can expand your movie horizons at the click of a button. We have a diverse selection of films you can search through by title, but if you want something more specific we provide that. Once you select a film you are able to also look for specific actors, directors and genres to influence what we recommend for you at the bottom of the page. We provide up to 3 suggestions based off what you are looking for, and from there you will be able to select the new film of your choice and fall down the rabbit hole of cinema. Who knows you may find something new that you've never heard of before.</p>
                    </div>
                    <hr />
                        <a type="button" className="btn btn-info" href="https://github.com/acm4219/SAFT">Github Repo</a>
                        <a type="button" className="btn btn-info" href="https://acm4219.github.io/SAFT/">Live Site</a>
                        <br />
                </div>
                <div className="card">
                <img className="w-75 p-3 h-75 d-inline-block" src={process.env.PUBLIC_URL + "/photoAssets/five-day-weather.JPG"} alt="weatherforecast" />
                <h5 className="card-title pl-1">Five Day Weather Forecast</h5>
                        <hr />
                    <div className="card-body">
                        <p>This application is used to look into the upcoming weather for your city up to five days. For every city that you look up you're able to go back to for the weather and cycle between the searches at a click. In the weather section you'll be able to see: the date, current weather condition, the icon, the temperature, humidity and windspeed.</p>
                    </div>
                    <hr />
                        <a type="button" className="btn btn-info" href="https://github.com/acm4219/Five-Day-Weather-Forecast-App">Github Repo</a>
                        <a type="button" className="btn btn-info" href="https://acm4219.github.io/Five-Day-Weather-Forecast-App/Assets/">Live Site</a>
                        <br />
                </div>
                <div className="card">
                <img className="w-75 p-3 h-75 d-inline-block" src={process.env.PUBLIC_URL + "/photoAssets/Daily Planner.JPG"} alt="Dailyplanner" />
                <h5 className="card-title pl-1">Daily Planner</h5>
                        <hr />
                    <div className="card-body">
                        <p>This application is a daily planner where you can save your daily plans and clear out the old ones. You use the application by entering in your plans for the day in the allotted slot of time and hit the save button to save it. It remains on the page until you clear the local storage and refresh for new slots to fill for your day.</p>
                    </div>
                    <hr />
                        <a type="button" className="btn btn-info" href="https://github.com/acm4219/Bootcamp-Daily-Planner-Project">Github Repo</a>
                        <a type="button" className="btn btn-info" href="https://acm4219.github.io/Bootcamp-Daily-Planner-Project/02-Homework/Develop/">Live Site</a>
                        <br />
                </div>
            </div>
        </div>

    )
}

export default ProjectCard;