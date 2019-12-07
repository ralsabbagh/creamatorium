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

    this.setUpFireBase();
    this.userName = "";

    this.wishListObject = {
      items: [
        {
          title: "Airpods",
          location: "Mall",
          status: "true"
        },
        {
          title: "Flowers",
          location: "Garden",
          status: "true"
        },
        {
          title: "Candies",
          location: "street",
          status: "false"
        },
        {
          title: "Neckless",
          location: "Heaven",
          status: "false"
        }
      ],
      uid: ""
    };
  }

  setUpFireBase() {
    var _this = this;
    firebase
      .database()
      .ref("wishlist")
      .on("value", function(snapshot) {
        // _this.totalOrdersCount = snapshot.numChildren();
        // _this.wishListObject.id = _this.totalOrdersCount;
        /// [filter the orders]
        // var ordered = [];
        // var picked = [];
        // var ready = [];
        // var being = [];
        // var cancelled = [];
        // console.log(snapshot);
        // /// fetch user orders
        // var ordersPerUser = [];
        // var ordersPerUserBeing = [];
        // var ordersPerUserReady = [];
        // var allOrders = [];
        // snapshot.forEach(object => {
        //   allOrders.push(object.val());
        //   /// [filter the orders]
        //   if (object.val().status.toLowerCase() == "ordered")
        //     ordered.push(object.val());
        //   if (object.val().status.toLowerCase() == "picked")
        //     picked.push(object.val());
        //   if (object.val().status.toLowerCase() == "ready")
        //     ready.push(object.val());
        //   if (object.val().status.toLowerCase() == "being")
        //     being.push(object.val());
        //   if (object.val().status.toLowerCase() == "cancelled")
        //     cancelled.push(object.val());
        //   /// fetch user orders
        //   if (object.val().userID == _this.getUserID()) {
        //     ordersPerUser.push(object.val());
        //     console.log("heeeeelooooo");
        //     if (object.val().status.toLowerCase() == "ready")
        //       ordersPerUserReady.push(object.val());
        //     if (object.val().status.toLowerCase() == "being")
        //       ordersPerUserBeing.push(object.val());
        //   }
        // });
        // _this.ordered = ordered;
        // _this.picked = picked;
        // _this.ready = ready;
        // _this.being = being;
        // _this.cancelled = cancelled;
        // /// fetch user orders
        // _this.ordersPerUser = ordersPerUser;
        // _this.ordersPerUserBeing = ordersPerUserBeing;
        // _this.ordersPerUserReady = ordersPerUserReady;
        // _this.allOrders = allOrders;
      })
      .bind(this);
  }

  removeItem() {}
  addItem(item) {
    var _this = this;
    _this.wishListObject.items.push(item);
    // var uid = firebase
    //   .database()
    //   .ref("wishlist")
    //   .push().key;

    // this.wishListObject.uid = uid;
    // var updates = {};
    // updates["/wishlist/" + uid + "/"] = this.wishListObject;

    // firebase
    //   .database()
    //   .ref()
    //   .update(updates);
    // this.setCategories();
    // this.canSubmit = false;
  }

  updateListStatus(uid, status) {
    firebase
      .database()
      .ref("wishlist/" + uid + "/status/")
      .set(status);
  }
}

decorate(GeneralStore, {
  userName: observable,
  wishListObject: observable
});

let generalStore = new GeneralStore();
generalStore.setUpFireBase();
export default generalStore;
