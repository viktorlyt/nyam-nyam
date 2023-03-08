import "../../../styles/index.scss";
import dominosArray from "./data/dominos.json";
import kfcArray from "./data/kfc.json";
import macArray from "./data/mac.json";
import { Dish } from "./dishClass";

const dominosDishes = dominosArray.map(
  (item) => new Dish(item.id, item.price, item.title, item.img, item.count)
);
const kfcDishes = kfcArray.map(
  (item) => new Dish(item.id, item.price, item.title, item.img, item.count)
);
const macDishes = macArray.map(
  (item) => new Dish(item.id, item.price, item.title, item.img, item.count)
);
const allDishes = [...dominosDishes, ...macDishes, ...kfcDishes];

const restos = Array.from(document.querySelectorAll(".featured__item"));

function selectDishes() {
  const restoActive = document.getElementsByClassName(
    "featured__item featured-item active"
  )[0];
  const restoSelectedItem = () => {
    if (restoActive.id === "dominosResto") return dominosDishes;
    if (restoActive.id === "kfcResto") return kfcDishes;
    if (restoActive.id === "macResto") return macDishes;
  };
  const restoSelected = restoSelectedItem();
  return restoSelected;
}
const restoSelected = selectDishes();

const tabs__content = document.getElementsByClassName("tabs__content")[0];
tabs__content.innerHTML = "";

function getDish(dish) {
  return `
  <div class="dish">
    <img class="dish__image" src="${dish.img}" alt="">
    <div class="dish__title">${dish.title}</div>
    <div class="dish__info">
      <div class="dish__price">${dish.price} $</div>
      <div class="counter">
        <button class="counter__button counter__button--decrease"></button>
        <span class="counter__number">${dish.getCount()}</span>
        <button class="counter__button counter__button--increase"></button>
      </div>
    </div>
  </div>`;
}

const generateHTML = (restoSelected) => {
  tabs__content.innerHTML = "";
  const tabs__contentHTML = restoSelected
    .map((dish) => {
      return getDish(dish);
    })
    .join("");

  tabs__content.innerHTML = tabs__contentHTML;
};

generateHTML(restoSelected);

restos.map((resto) => {
  resto.addEventListener("click", (event) => {
    restos.forEach((item) => item.classList.remove("active"));
    resto.classList.add("active");
    tabs__content.innerHTML = "";
    const restoSelected = selectDishes();

    generateHTML(restoSelected);
    const counter__button__decrease = document.querySelectorAll(
      ".counter__button--decrease"
    );
    const CBDs = Array.from(counter__button__decrease);
    const counter__button__increase = document.querySelectorAll(
      ".counter__button--increase"
    );
    const CBIs = Array.from(counter__button__increase);
    addCBDListeners(CBDs);
    addCBIListeners(CBIs);
    hideBtns();
  });
});

//task3
const counter__button__decrease = document.querySelectorAll(
  ".counter__button--decrease"
);
const CBDs = Array.from(counter__button__decrease);
const counter__button__increase = document.querySelectorAll(
  ".counter__button--increase"
);
const CBIs = Array.from(counter__button__increase);

const counter__number = document.querySelectorAll(".counter__number");
const CNs = Array.from(counter__number);

const addBtnDisplayNone = (element) => {
  const closestEl = element.previousElementSibling;
  closestEl?.setAttribute("style", "display: none");
};

const removeBtnDisplayNone = (element) => {
  const closestEl = element.previousElementSibling;
  closestEl?.setAttribute("style", "display: inherit");
};

function quantity() {
  const counter__number = document.querySelectorAll(".counter__number");
  const CNs = Array.from(counter__number);
  let goodQuantity = 0;
  CNs.forEach((cn) => {
    if (cn.textContent !== "0") {
      goodQuantity++;
    }
  });
  document.getElementsByClassName("icon-button__badge")[0].textContent =
    goodQuantity;
}

function hideBtns() {
  const counter__number = document.querySelectorAll(".counter__number");
  const CNs = Array.from(counter__number);
  CNs.forEach((cn) => {
    if (cn.textContent === "0") {
      addBtnDisplayNone(cn);
      quantity();
    } else {
      removeBtnDisplayNone(cn);
      quantity();
    }
  });
}
hideBtns();

function addCBDListeners(elements) {
  for (const element of elements) {
    element.addEventListener("click", () => {
      +element.closest(".counter").querySelector(".counter__number")
        .textContent--;
      hideBtns();
    });
  }
}

addCBDListeners(CBDs);

function addCBIListeners(elements) {
  for (const element of elements) {
    element.addEventListener("click", () => {
      +element.previousElementSibling.textContent++;
      hideBtns();
    });
  }
}

addCBIListeners(CBIs);

//task4
const icon_button_orange = document.getElementsByClassName(
  "icon-button--orange"
)[0];
const drawer = document.getElementById("drawer");
const cross = document.getElementById("cross");
const add_more = document.getElementById("add-more");
const order = document.getElementById("order");
const subtitle = document.getElementById("subtitle");
const restoTitle = document.getElementById("restoTitle");
const deliveryPrice = document.getElementById("deliveryPrice");
const totalSum = document.getElementById("totalSum");

function getOrderedDish(orderedDish) {
  const img = allDishes.filter(dish => orderedDish.title === dish.title)[0].img;
  return `
    <div class="order__item order-item">
      <img class="order-item__image" src="${img}" alt="">
      <span class="order-item__quantity">${orderedDish.count} X</span>
      <div class="order-item__info">
        <h3 class="order-item__title h3">${orderedDish.title}</h3>
        <div class="order-item__price">${orderedDish.price} $</div>
      </div>
      <button class="icon-button icon-button--red"><img src="img/icons/delete.svg" alt=""></button>
    </div>`;
}
const generateHTMLForDrawer = (orderedDishes) => {
  order.innerHTML = "";
  const orderHTML = orderedDishes
    .map((dish) => {
      return getOrderedDish(dish);
    })
    .join("");

  order.innerHTML = orderHTML;
};

icon_button_orange.addEventListener("click", (e) => {
  drawer.classList.add("visible");
  subtitle.innerText = `(${
    document.getElementsByClassName("icon-button__badge")[0].textContent
  } items)`;
  restoTitle.innerText = `${
    document.getElementsByClassName("featured__item featured-item active")[0]
      .name
  }`;
  const selectedDishes = setArrayFromSelectedDishes();
  generateHTMLForDrawer(selectedDishes);
});

function setArrayFromSelectedDishes() {
  const counter__number = document.querySelectorAll(".counter__number");
  const CNs = Array.from(counter__number);
  const restoActive = document.getElementsByClassName(
    "featured__item featured-item active"
  )[0].name;
  const arrayFromSelectedDishes = [];
  let sum = 0;
  CNs.forEach((cn) => {
    if (cn.textContent !== "0") {
      const title =
        cn.closest(".dish__info").previousElementSibling.textContent;
      const id = allDishes.filter((dish) => dish.title === title)[0].id;
      const priceStr =
        cn.closest(".counter").previousElementSibling.textContent;
      const newOrder = {
        id,
        price: +priceStr.slice(0, priceStr.length - 2),
        title,
        count: +cn.textContent,
      };
      arrayFromSelectedDishes.push(newOrder);
      sum += newOrder.count * newOrder.price;
    }
  });
  sum = restoActive === "McDonald’s" ? sum + 20 : sum;
  deliveryPrice.innerText =
    restoActive === "McDonald’s" ? "20 $" : "free delivery";
  totalSum.innerText = ` (${sum} $)`;
  return arrayFromSelectedDishes;
}

cross.addEventListener("click", () => {
  drawer.classList.remove("visible");
});
add_more.addEventListener("click", () => {
  drawer.classList.remove("visible");
});

//task5
const checkout = document.getElementById("checkout");

checkout.addEventListener("click", () => {
  const ordersFromLocal = JSON.parse(localStorage.getItem("orders")) || [];
  const newOrder = {
    restaurant: document.getElementsByClassName(
      "featured__item featured-item active"
    )[0].name,
    checkout: new Date(),
    orders: setArrayFromSelectedDishes(),
  };
  ordersFromLocal.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(ordersFromLocal));
  window.location.href = 'orders.html';
});
