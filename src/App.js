import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import infodump from './components/infodump';
import article1 from './components/InfoDump/Article1'
//import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path = "/infodump" component={infodump} />
        <Route exact path = "/infodump/article1" component={article1} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
// // <Route exact path="/contact" component={Contact} />