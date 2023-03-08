import dateFormat from "dateformat";

export class Checkout {
  #orders = [];
  #checkout;
  #restaurant;
  constructor(restaurant, checkout, orders) {
    if (["Domino’s Pizza", "McDonald’s", "KFC"].includes(restaurant)) {
      this.#restaurant = restaurant;
    } else {
      throw new Error("Invalid restaurant");
    }
    if (!Array.isArray(orders)) throw new Error("Orders must be an array!");
    orders.forEach((order) => {
      if (
        order.id <= 0 ||
        order.price <= 0 ||
        order.title.length <= 5 ||
        order.title.length >= 30 ||
        order.count <= 0 ||
        Object.keys(order).length !== 4
      ) {
        throw new Error("Invalid orders!");
      }
    });
    this.#orders = orders;
    this.#checkout = checkout;
  }
  get isOrderFinished() {
    return (
      (new Date().getTime() - this.getCheckoutTime().getTime()) / 1000 / 60 >=
      60
    );
  }
  getRestaurant() {
    return this.#restaurant;
  }
  getCheckout() {
    return this.#checkout;
  }
  setCheckout() {
    this.#checkout = new Date();
    return this.#checkout;
  }
  getCheckoutTime() {
    return (
      Math.round(60 - (new Date().getTime() - new Date(this.getCheckout()).getTime()) / 1000 / 60)
    );
  }
  getFormattedDate() {
    return `${dateFormat(new Date(this.#checkout), "mmmm dS, yyyy")}`;
  }
  getFormattedTime() {
    return `${dateFormat(new Date(this.#checkout), "hh:MM TT")}`;
  }
  getOrders() {
    return this.#orders;
  }
  setOrders(orders) {
    if (!Array.isArray(orders)) throw new Error("Orders must be an array!");
    orders.forEach((order) => {
      if (
        order.id <= 0 ||
        order.price <= 0 ||
        order.title.length <= 5 ||
        order.title.length >= 30 ||
        order.count <= 0 ||
        Object.keys(order).length !== 4
      ) {
        throw new Error("Invalid orders!");
      }
    });
    this.#orders = orders;
  }
  getCheckoutTimePercent() {
    return (this.getCheckoutTime() / 60) * 100;
  }
}
