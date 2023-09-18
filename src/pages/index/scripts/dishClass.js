export class Dish {
  #count = 0;
  constructor(id, price, title, img, count) {
    this.id = id;
    this.price = price;
    this.title = title;
    this.img = img;
    this.#count = count;
  }
  getCount() {
    return this.#count;
  }
  setCount(count) {
    if (typeof count !== number || count < 0) {
      throw new Error("Invalid count!");
    }
    this.#count = count;
  }
}