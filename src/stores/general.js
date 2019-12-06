import React from "react";
import { decorate, observable, computed } from "mobx";
import firebase from "firebase";

class GeneralStore {
  constructor() {
    var config = {
      apiKey: "AIzaSyAvv8HXDFBw8IWJHzGLAqpLKJyATrxxryE",
      authDomain: "projectId.firebaseapp.com",

      //https://lsd-hakason.firebaseio.com/
      databaseURL: "https://lsd-hakason.firebaseio.com",
      storageBucket: "bucket.appspot.com"
    };
    firebase.initializeApp(config);

    this.totalOrdersCount = 0;
    this.ordered = [];
    this.picked = [];
    this.ready = [];
    this.being = [];
    this.cancelled = [];

    /// fetch user orders
    this.ordersPerUser = [];
    this.userID = "01011";
    this.userName = "Fucker";

    firebase
      .database()
      .ref("creamatorium/orders")
      .on("value", function(snapshot) {
        this.totalOrdersCount = snapshot.numChildren();

        /// [filter the orders]
        var ordered = [];
        var picked = [];
        var ready = [];
        var being = [];
        var cancelled = [];

        /// fetch user orders
        var ordersPerUser = [];

        snapshot.forEach(object => {
          /// [filter the orders]
          if (object.val().status.toLowerCase() == "ordered")
            ordered.push(object.val());
          if (object.val().status.toLowerCase() == "picked")
            picked.push(object.val());
          if (object.val().status.toLowerCase() == "ready")
            ready.push(object.val());
          if (object.val().status.toLowerCase() == "being")
            being.push(object.val());
          if (object.val().status.toLowerCase() == "cancelled")
            cancelled.push(object.val());

          /// fetch user orders
          if (object.val().userID.toLowerCase() == this.userID)
            ordersPerUser.push(object.val());
        });

        this.ordered = ordered;
        this.picked = picked;
        this.ready = ready;
        this.being = being;
        this.cancelled = cancelled;

        /// fetch user orders
        this.ordersPerUser = ordersPerUser;
      });
  }

  createOrder() {
    var orderObject = {
      id: this.totalOrdersCount,
      uid: "",
      specification: {
        base: [""],
        nuts: [""],
        sauces: [""],
        fruits: [""],
        baked: [""]
      },
      status: "Ordered",
      userID: this.userID,
      userName: this.userName
    };

    var uid = firebase
      .database()
      .ref("creamatorium/orders")
      .push()
      .key();

    orderObject.uid = uid;
    var updates = {};
    updates["/creamatorium/orders/" + uid + "/"] = orderObject;

    return firebase
      .database()
      .ref()
      .update(updates);
  }

  updateOrderStatus(uid, status) {
    firebase
      .database()
      .ref("creamatorium/orders/" + uid + "/status/")
      .set(status);
  }
}

decorate(GeneralStore, {
  //   isLoading: observable
});

export default GeneralStore;
