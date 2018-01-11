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

store.dispatch((addExpense({ description: 'Water Bill', amount: 15000, createdAt: -100})));
store.dispatch((addExpense({ description: 'Gas Bill', amount: 100, createdAt: -10000})));
store.dispatch((addExpense({ description: 'Rent', amount: 5100, createdAt: 1000})));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
