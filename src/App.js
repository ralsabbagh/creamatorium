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
  Redirect,
  Link
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
              <Route
                path="/user/:userId"
                render={props =>
                  store.currentUid == null
                    ? (
                      <Redirect to="/" />
                    ) : (
                      <div>
                        <WishListPage
                          {...props}
                          wishListItems={store.wishListObject.items}
                          addItem={store.addItem}
                          storeItemName={store.updateItemName}
                          deleteItem={store.deleteItem}
                          sharableList={store.currentUid}
                        />
                        <div><Link to={'/' + store.currentUid}>Share this list</Link></div>
                      </div>
                    )
                }
              />
              {console.log(store.currentUid)}
              <Route
                exact path="/signup"
                render={props => (

                  store.currentUid == null ?
                    <PopUp show={true}>
                      <SignForm
                        storeUserName={store.updateUser}
                        storePassword={store.updatePassword}
                        storeEmail={store.updateEmail}
                        action={store.registerUser}
                        buttonText="Sign Up"
                      />
                    </PopUp>
                    : <Redirect to=
                      {'/user/' + store.currentUid} />
                )}
              />
              <Route
                path="/:listId"
                render={props =>
                  (
                    <WishListPage
                      {...props}
                      wishListItems={store.wishListObject.items}
                      viewMode={true}
                    />
                  )
                }
              />

              <Route
                path="/"
                render={props => (
                  <PopUp show={true}>
                    <SignForm
                      storeUserName={store.updateUser}
                      storePassword={store.updatePassword}
                      action={() => { }}
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
