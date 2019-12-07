

import { decorate, observable, computed } from 'mobx';
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

    this.totalOrdersCount =0;
    this.ordered = [];
    this.picked = [];
    this.ready = [];
    this.being = [];
    this.cancelled = [];
    this.ordersPerUser = [];
    this.ordersPerUserBeing = [];
    this.ordersPerUserReady = [];
    this.userID = "01011";
    this.userName = "Hmmmm";

    this.categories = [{
      title: 'Base (required)',
      options: ['Vanilla', 'Chocolate', 'Coffee', 'Mango', 'Strawberry', 'Lemon'],
      optionsSelections: [false, false, false, false, false, false]

    },
    {
      title: 'Nuts',
      options: ['Almonds', 'Pistachios', 'Walnuts', 'Cashews', 'Pecans', 'Hazelnuts'],
      optionsSelections: [false, false, false, false, false, false]

    },
    {
      title: 'Sauces',
      options: ['Chocolate', ' Salted Caramel', 'Toffee', 'Maple'],
      optionsSelections: [false, false, false, false,]

    },
    {
      title: 'Fruits',
      options: ['Strawberry', 'Mango', 'Raspberry', 'Banana'],
      optionsSelections: [false, false, false, false,]

    },
    {
      title: 'baked yumminess',
      options: ['Dount', 'Cookies'],
      optionsSelections: [false, false,]

    },

    ];
    this.setUpFireBase();
  }


  setUpFireBase() {


    var _this = this;
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
        var ordersPerUserBeing = [];
        var ordersPerUserReady = [];
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
          if (object.val().userID == _this.userID)
  
            ordersPerUser.push(object.val());

            if (object.val().status.toLowerCase() == "ready")
            ordersPerUserReady.push(object.val());
          if (object.val().status.toLowerCase() == "being")
          ordersPerUserBeing.push(object.val());            
        });
        _this.ordered = ordered;
        _this.picked = picked;
        _this.ready = ready;
        _this.being = being;
        _this.cancelled = cancelled;




        /// fetch user orders
        _this.ordersPerUser = ordersPerUser;
        _this.ordersPerUserBeing= ordersPerUserBeing;
        _this.ordersPerUserReady = ordersPerUserReady;
      })

      .bind(this);

  }


  createOrder() {
    console.log("hey");
    // let _this = this;
    var _this = this;

    console.log(this);

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
      .key;

    orderObject.uid = uid;
    var updates = {};
    updates["/creamatorium/orders/" + uid + "/"] = orderObject;

    firebase
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

  toppingChanged(categoryIndex, index) {
    console.log(categoryIndex, index);
    this.categories[categoryIndex].optionsSelections[index] = !this.categories[categoryIndex].optionsSelections[index];
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
  ordersPerUserBeing: observable,
  ordersPerUserReady: observable,
  userID: observable,
  userName: observable,
})

let generalStore = new GeneralStore();
// generalStore.setUpFireBase();
export default generalStore;
