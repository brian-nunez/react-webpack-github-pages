import React, { useMemo } from 'react';
import { Router, LocationProvider, createHistory } from '@reach/router';
import App from '../App';
import About from '../components/About';
import NotFound from '../components/NotFound';

export default function Routes() {
  const history = useMemo(() => createHistory(window), []);

  return (
    <React.Suspense fallback={(<div>Loading...</div>)}>
      <LocationProvider history={history}>
        {({ location }) => (
          <Router basepath="/" location={location}>
            <App path="/" />
            <About path="/about" />
            <NotFound default />
          </Router>
        )}
    </LocationProvider>
  </React.Suspense>
  );
}
