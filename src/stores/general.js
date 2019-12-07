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
    this.currentItemName = "";
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

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateItemName = this.updateItemName.bind(this);
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

  addItem() {
    var _this = this;

    let locations = [
      "Mall",
      "Sea Side",
      "Derwaza",
      "Souq Al-Mubarakia",
      "Fashion Mill"
    ];
    var rand = locations[Math.floor(Math.random() * locations.length)];

    var _item = {
      title: _this.currentItemName,
      location: rand,
      status: "false"
    };
    _this.currentItemName = "";
    _this.wishListObject.items.push(_item);
  }
  deleteItem(item) {
    var _this = this;
    _this.wishListObject.items.remove(item);
    console.log(_this.wishListObject.items);
  }
  updateItemName(e) {
    var _this = this;
    console.log(e);

    _this.currentItemName = e;
    console.log("_this.currentItemName");
    console.log(_this.currentItemName);
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
