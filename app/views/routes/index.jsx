import React                              from 'react';
import { Router, Route, Redirect, browserHistory }  from 'react-router';
import ApplicationContainer               from 'app/views/app/application-container/index.jsx';
import ExpensesContainer                  from 'app/views/expenses/expenses-container/index.jsx';
import GridContainer                      from 'app/views/grid/index.jsx';


export default function renderRoutes(store) {
  return (
    <Router history={browserHistory}>
      <Redirect from='/' to='/expenses' />
      <Route path="" component={ApplicationContainer} >
        <Route path="/expenses" component={ExpensesContainer} />
      </Route>
      <Route path="/grid" component={GridContainer} />
    </Router>
  );
}
