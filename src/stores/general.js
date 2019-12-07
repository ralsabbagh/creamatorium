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
    this.currentUid = null;
    this.wishListObject = {
      items: [
        //   {
        //     title: "Airpods",
        //     location: "https://www.google.com/maps/search/?q=8mall",
        //     status: "true"
        //   },
        //   {
        //     title: "Flowers",
        //     location: "https://www.google.com/maps/search/?q=avenue",
        //     status: "true"
        //   },
        //   {
        //     title: "Candies",
        //     location: "https://www.google.com/maps/search/?q=mubarkia",
        //     status: "false"
        //   },
        //   {
        //     title: "Neckless",
        //     location: "https://www.google.com/maps/search/?q=mubarkia",
        //     status: "false"
        //   }

      ],
      uid: ""
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateItemName = this.updateItemName.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  setUpFireBase() {
    var _this = this;
    firebase
      .database()
      .ref("wishlist")
      .on("value", function (snapshot) {
      })
      .bind(this);
  }

  addItem() {
    var _this = this;

    let locations = [
      "https://www.google.com/maps/search/?q=8mall",
      "https://www.google.com/maps/search/?q=avenue",
      "https://www.google.com/maps/search/?q=mubarkia",
      "https://www.google.com/maps/search/?q=mubarkia",
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

  updateUser(e) {
    var _this = this;
    console.log(e);

    _this.currentUser = e;
  }
  updatePassword(e) {
    var _this = this;
    console.log(e);

    _this.currentPassword = e;
  }
  updateEmail(e) {
    var _this = this;
    console.log(e);

    _this.currentEmail = e;
  }
  registerUser() {
    console.log('fsdfds')
    var _this = this;

    var uid = firebase
      .database()
      .ref("wishlist/users")
      .push().key;
    var usr = {
      email: _this.currentEmail,
      name: _this.currentUser,
      password: _this.currentPassword,
      uid: uid
    };
    _this.currentUid = uid;
    var updates = {};
    updates["/wishlist/users/" + uid + "/"] = usr;

    firebase
      .database()
      .ref()
      .update(updates);
  }

  updateListStatus(uid, status) {
    firebase
      .database()
      .ref("wishlist/" + uid + "/status/")
      .set(status);
  }

  login() {
    if (false) { alert('Invalid email or password'); }
  }

}


decorate(GeneralStore, {
  userName: observable,
  wishListObject: observable,
  currentUid: observable,
});

let generalStore = new GeneralStore();
generalStore.setUpFireBase();
export default generalStore;
