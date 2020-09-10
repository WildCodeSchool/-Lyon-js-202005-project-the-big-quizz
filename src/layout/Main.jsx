import React from "react";
import { Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

import Home from "../components/Home";
import Parameters from "../components/Parameters";
import Game from "../components/Game";
import Stats from "../components/Stats";
import ReactStrap from "../components/ReactStrap";

function Main(props) {
console.log ('props de main',props.category)
  return (
    <div className="main">

      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/parameters">
          <Parameters {...props} gameParameters={props.gameParameters} />
        </Route>

        {/* <Route  path="/parameters"  
       render={(props) => <gameParameters {...props} gameParameters={props.gameParameters} />}  
         />  */}

        <Route path="/game">
          <Game {...props} gameParameters={props.gameParameters} />
        </Route>

        <Route path="/stats">
          <Stats {...props} gameParameters={props.gameParameters} />
        </Route>


        {/* <Route path="/stats" component={Stats} /> */}
        <Route path="/ReactStrap" component={ReactStrap} />
      </Switch>
    </div>
  );
}

export default Main;

/* <Route path="/test/" render={(props) => <Test {...props} lst={lst} />} /> */
