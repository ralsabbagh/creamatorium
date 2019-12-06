import React from 'react';
import Page from './components/page/page.js'
import OrdersNumbers from './components/ordersNumbers/ordersNumbers.js'
import Header from './components/header/header.js'
import Button from './components/button/button.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <Page 
      header={<Header
        headerTitle={'Creamatorium'}
      />}
      body={
      <div>
      <OrdersNumbers
        readyListTitle='ready for pickup'
        readyList={['1', '2', '3']}
        preaparingListTitle='being prepared'
        preaparingList={['1', '2']}
      ></OrdersNumbers>
      </div>} />
      <Button
      className={'container'}
      style={{marginTop:'20px'}}
        text={'Place a New Order'}
      />
    </div>
  );
}

export default App;
