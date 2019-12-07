import React from 'react';
import Page from './components/page/page.js'
import WishListPage from './components/wishListPage/wishListPage.js'

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
  return (
    <div className="App">
      <Page
        header={<Header
          headerTitle={'WishList'}
        />}
        body={
          <Router>
            <Switch>
              <Route path='/'
                render={props => <WishListPage
                  {...props}
                  wishListItems={[
                    {
                      id: '0',
                      title: 'Airpods'
                    },
                    {
                      id: '1',
                      title: 'Flowers'
                    },
                    {
                      id: '2',
                      title: 'Candies'
                    },
                    {
                      id: '3',
                      title: 'Neckless'
                    },
                  ]}
                  addItem={() => { }}
                  storeItemName={(e) => { }}
                  deleteItem={() => { }}
                />}
              />
            </Switch>
          </Router>
        } />
    </div>
  );
}

export default observer(App);