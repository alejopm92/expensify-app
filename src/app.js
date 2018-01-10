import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextfilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState());

store.dispatch((addExpense({ description: 'Water Bill', amount: 100, createdAt: -10000})));
store.dispatch((addExpense({ description: 'Gas Bill', amount: 100, createdAt: -10000})));
store.dispatch(setTextfilter('bill'));
let state = store.getState();
let visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
store.dispatch(setTextfilter('water'));
state = store.getState();
visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

store.dispatch(setTextfilter('Bill'));
state = store.getState();
visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
