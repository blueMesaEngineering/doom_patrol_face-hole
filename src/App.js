import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/about/About'
import Ndguthrie from './pages/about/Ndguthrie'
import Shallphd from './pages/about/Shallphd'
import Distralite from './pages/projects/Distralite'
import Minotaurshoof from './pages/projects/Minotaurshoof'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Ndguthrie" component={Ndguthrie} />
        <Route exact path="/Shallphd" component={Shallphd} />
        <Route exact path="/Distralite" component={Distralite} />
        <Route exact path="/Minotaurshoof" component={Minotaurshoof} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/articles" component={Articles} /> */}
      </Switch>
    </div>
  );
}

export default App;
