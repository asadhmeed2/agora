import { makeObservable, observable, computed } from "mobx";

import { v4 as uidv4 } from "uuid";

export class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.isPerched = false;
    this.id = uidv4();

    makeObservable(this, {
      price: observable,
      isPerched: observable,
    });
  }
}
