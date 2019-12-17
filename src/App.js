import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './containers/Home/Home';
import NotFound from './components/NotFound/NotFound'
import Event from './containers/Event/Event'
import About from './components/About/About'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/event/:id" component={Event} />
        <Route path="/about" component={About} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Layout>
  );
}

export default App;
