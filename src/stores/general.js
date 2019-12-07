import { decorate, observable, computed } from "mobx";
import firebase from "firebase";

class GeneralStore {
  constructor() {
    this.userName = "";
  }
}
decorate(GeneralStore, {
  userName: observable,

})


let generalStore = new GeneralStore();
export default generalStore;
