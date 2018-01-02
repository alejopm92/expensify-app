import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is my dashboard
  </div>
);

const AddExpensePage = () => (
  <div>
    This is my add dashboard
  </div>
);

const EditExpensePage = () => (
  <div>
    This is my edit dashboard
  </div>
);

const HelpPage = () => (
  <div>
    This is my help dashboard
  </div>
);

const Header = () => (
  <div>
    <h1>Espensify App</h1>
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}>/Home </NavLink>
      <NavLink to="/create" activeClassName="is-active"> /Add Expense</NavLink>
      <NavLink to="/edit" activeClassName="is-active"> /Edit Expense </NavLink>
      <NavLink to="/help" activeClassName="is-active"> /Help (?)</NavLink>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div>
    404! <NavLink to="/">Go Home</NavLink>
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
