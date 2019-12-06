import React from "react";
import { decorate, observable, computed } from "mobx";

class GeneralStore {}
decorate(GeneralStore, {
  //   isLoading: observable
});

export default GeneralStore;
