import React from 'react';
import { Route, Switch } from "react-router-dom";
import Contact from './Contact';
import Projects from './Projects';
import Home from './Home';

 const MainRoute = ()=> {
  return (
    <div>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
    </Switch>
</div>

  );
}

export default MainRoute;