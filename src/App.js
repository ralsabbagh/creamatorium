import React from 'react';
import Page from './components/page/page.js'
import OrdersNumbersPage from './components/ordersNumbersPage/ordersNumbersPage.js'
import OrderPage from './components/orderPage/orderPage.js'
import SuccessPage from './components/successPage/successPage.js'
import DashboardOrdersPage from './components/dashboardOrdersPage/dashboardOrdersPage.js'
import { observer } from 'mobx-react';

import store from './stores/general.js'

import Header from './components/header/header.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  // console.log(store);
  return (
    <div className="App">
      <Page
        header={<Header
          headerTitle={'Creamatorium'}
        />}
        body={
          <Router>
            <Switch>
              <Route path='/user/:userId/order/'
                render={props => <OrderPage {...props} store={store} />}
              />
              <Route path='/user/:userId/success/'
                render={props => <SuccessPage {...props} store={store} />}
              />
              <Route path='/user/:userId'
                render={props => <OrdersNumbersPage  {...props} store={store} />}
              />
              <Route path='/dashboard/'
                render={props => <DashboardOrdersPage {...props} store={store} />}
              />
            </Switch>
          </Router>
        } />
    </div>
  );
}

export default observer(App);