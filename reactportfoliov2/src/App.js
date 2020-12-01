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


function App() {
  return (
    <div className="relative bg-blue-200 pb-10 min-h-screen">
     <Router>
       <Header />
       <div className="p-3 bg-blue-200">
        <Switch>
          <Route exact path="/React-Portfolio/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>

     
    </div>
  );
}

export default App;
