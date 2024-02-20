import { makeObservable, action, observable } from "mobx";
import { Item } from "./Item";

export class InventoryStore {
  constructor() {
    this.items = [];

    makeObservable(this, {
      items: observable,
      add: action,
      bay: action,
      changePrice: action,
    });
  }

  add(name, price) {
    this.items.push(new Item(name, price));
  }

  bay(id) {
    const item = this.items.find((item) => item.id === id);
    item.isPerched = true;
  }

  changePrice(price, id) {
    const item = this.items.find((item) => item.id === id);
    item.price = price;
  }
}
