import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import EmployeementForm from './Containers/employeementContainer';
import PersonalForm from './Containers/personalContainer';
import EmployeeDetails from './Containers/employeeDetailContainer';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={EmployeementForm} />
          <Route exact path="/personalInfo" component={PersonalForm} />
          <Route exact path="/employeeDetails" component={EmployeeDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
