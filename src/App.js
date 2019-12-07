import React from "react";
import Page from "./components/page/page.js";
import WishListPage from "./components/wishListPage/wishListPage.js";
import SignForm from "./components/signForm/signForm.js";
import { observer } from "mobx-react";

import store from "./stores/general.js";
import Header from "./components/header/header.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
import PopUp from "./components/popUp/popUp.js";
function App() {
  return (
    <div className="App">
      <Page
        header={<Header headerTitle={"WishList"} />}
        body={
          <Router>
            <Switch>
              {" "}
              <Route
                path="/user/:userId"
                render={props =>
                  // this.store.userObj == null
                  true ? (
                    <Redirect to="/" />
                  ) : (
                    <WishListPage
                      {...props}
                      wishListItems={store.wishListObject.items}
                      addItem={store.addItem}
                      storeItemName={store.updateItemName}
                      deleteItem={store.deleteItem}
                    />
                  )
                }
              />
              <Route
                path="/signup"
                render={props => (
                  <PopUp show={true}>
                    <SignForm
                      storeUserName={e => {}}
                      storePassword={e => {}}
                      action={() => {}}
                      buttonText="Sign Up"
                    />
                  </PopUp>
                )}
              />
              <Route
                path="/"
                render={props => (
                  <PopUp show={true}>
                    <SignForm
                      storeUserName={e => {}}
                      storePassword={e => {}}
                      action={() => {}}
                      buttonText="Sign In"
                      link={"/signup"}
                      linkTitle={"dont have an account?"}
                    />
                  </PopUp>
                )}
              />
            </Switch>
          </Router>
        }
      />
    </div>
  );
}

export default observer(App);
