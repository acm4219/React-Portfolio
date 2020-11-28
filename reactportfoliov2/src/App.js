import React from "react";
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Project from "./views/Project"

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
     <Router>
       <Header />
       <div className="p-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects/:id">
            <Project />
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>

     
    </div>
  );
}

export default App;
