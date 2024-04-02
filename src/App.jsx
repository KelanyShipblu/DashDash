import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import home from './home';
import CompanyRegistrationForm from './CompanyRegistration';
import AgentRegistration from './AgentRegistration';
import CompanyLogin from './CompanyLogin'; 
import AgentLogin from './AgentLogin'; 



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        {/* <Route exact path="/CompanyRegistrationFrom" component={CompanyRegistrationForm} />
        <Route exact path="/UserRegistrationForm" component={UserRegistrationForm} /> */}

        <Route path="/CompanyRegistration" component={CompanyRegistrationForm} />
        <Route path="/AgentRegistration" component={AgentRegistration} />
        <Route path="/CompanyLogin" component={CompanyLogin} /> 
        <Route path="/AgentLogin" component={AgentLogin} /> 
   
      </Switch>
      
    </Router>
    
  );
}

export default App;
