import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Career from './pages/Career';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/CV' exact component={Home} />
          <Route path='/CV/parcours' component={Career} />
          <Route path='/CV/competences' component={Skills} />
          <Route path='/CV/portfolio' component={Portfolio} />
          <Route path='/CV/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;