import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter ,Route } from 'react-router-dom';

import IndexPage from './IndexPage';
import CompanyRegistrationForm from './CompanyRegistrationForm';
import UserRegistrationForm from './UserRegistrationForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/company-registration" component={CompanyRegistrationForm} />
        <Route path="/user-registration" component={UserRegistrationForm} />
      </Switch>
    </Router>
  );
}

export default App;
