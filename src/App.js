import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
