import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Spinner from './components/UI/Spinner/Spinner'

const Home = lazy(() => import('./containers/Home/Home'))
const NotFound = lazy(() => import('./components/NotFound/NotFound'))
const Event = lazy(() => import('./containers/Event/Event'))
const About = lazy(() => import('./components/About/About'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/event/:id" component={Event} />
          <Route path="/about" component={About} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
