

import { decorate, observable, computed } from 'mobx';
import firebase from "firebase";

class GeneralStore {
  constructor() {
    this.totalOrdersCount = 0;
    this.ordered = [];
    this.picked = [];
    this.ready = [];
    this.being = [];
    this.cancelled = [];
    this.ordersPerUser = [];
    this.userID = "01011";
    this.userName = "Hmmmm";
  }


  setUpFireBase() {
    setTimeout(
      function () {
        var config = {
          apiKey: "AIzaSyAvv8HXDFBw8IWJHzGLAqpLKJyATrxxryE",
          authDomain: "projectId.firebaseapp.com",
          //https://lsd-hakason.firebaseio.com/
          databaseURL: "https://lsd-hakason.firebaseio.com",
          storageBucket: "bucket.appspot.com"
        };
        firebase.initializeApp(config);
        let _this = this;
        firebase
          .database()
          .ref("creamatorium/orders")
          .on("value", function (snapshot) {
            _this.totalOrdersCount = snapshot.numChildren();
            /// [filter the orders]
            var ordered = [];
            var picked = [];
            var ready = [];
            var being = [];
            var cancelled = [];
            console.log(snapshot);
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
              if (object.val().userID.toLowerCase() == _this.userID)
                ordersPerUser.push(object.val());
            });
            _this.ordered = ordered;
            _this.picked = picked;
            _this.ready = ready;
            _this.being = being;
            _this.cancelled = cancelled;

            /// fetch user orders
            _this.ordersPerUser = ordersPerUser;
          });
      }
        .bind(this),
      1000
    );
  }


  createOrder() {
    console.log("hey");
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

  test() {
    console.log("sdsdasdsad");
  }

}

decorate(GeneralStore, {
  createOrder: observable,
  totalOrdersCount: observable,
  ordered: observable,
  picked: observable,
  ready: observable,
  being: observable,
  cancelled: observable,
  ordersPerUser: observable,
  userID: observable,
  userName: observable,
})

let generalStore = new GeneralStore();
// generalStore.setUpFireBase();
export default generalStore;
