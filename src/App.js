import React from 'react';
import Page from './components/page/page.js'
import OrdersNumbersPage from './components/ordersNumbersPage/ordersNumbersPage.js'
import OrderPage from './components/orderPage/orderPage.js'
import SuccessPage from './components/successPage/successPage.js'

import store from './stores/general.js'

import Header from './components/header/header.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  console.log(store);
  return (
    <div className="App">
      <Page
        header={<Header
          headerTitle={'Creamatorium'}
        />}
        body={
          <Router>
            <Switch>
              <Route exact path='/user/'
                render={props => <OrdersNumbersPage />}
              />
              <Route exact path='/user/order/'
                render={props => <OrderPage />}
              />
              <Route exact path='/user/success/'
                render={props => <SuccessPage />}
              />

            </Switch>
          </Router>
        } />
    </div>
  );
}

export default App;
