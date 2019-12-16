import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'
import Event from './components/Event/Event';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/event/:id" component={Event} />
        <Redirect to="/not-found" component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
