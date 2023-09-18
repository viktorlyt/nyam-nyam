import "../../../styles/index.scss";
import { Checkout } from "./checkoutClass";

const navigation__item_choice = document.querySelector(
  ".navigation__item--choice"
);
const navigation__item_orders = document.querySelector(
  ".navigation__item--orders"
);

navigation__item_choice.classList.remove("selected");
navigation__item_orders.classList.add("selected");

const ordersFromLocal = JSON.parse(localStorage.getItem("orders")) || [];

const currentOrdersAll = ordersFromLocal.map(
  (item) => new Checkout(item.restaurant, item.checkout, item.orders)
);

const activeOrders = currentOrdersAll.filter(
  (order) => order.getCheckoutTime() > 0
);
const previousOrders = currentOrdersAll.filter(
  (order) => order.getCheckoutTime() <= 0
);

const coming_up = document.getElementById('coming-up');
const previous = document.getElementById('previous');


function getActiveOrder(order) {
  return `
  <div class="coming-up__item coming-up-item">
    <div class="coming-up-item__header">
      <h4 class="h4">${order.getRestaurant()}</h4>
      <div class="badge badge--orange">Delivery</div>
    </div>

    <div class="coming-up-info">
      <img src="img/icons/clock.svg" alt="">
      <div class="coming-up-info__content">
        <div>Order will be completed in</div>
        <div class="coming-up-info__title">${order.getCheckoutTime()} min</div>
      </div>
    </div>

    <div class="progress-bar">
      <div class="progress-bar__line" style="width: ${order.getCheckoutTimePercent()}%"></div>
      <div class="progress-bar__overlay">
        <div class="progress-bar__item progress-bar__item--first"></div>
        <div class="progress-bar__item progress-bar__item--sec"></div>
        <div class="progress-bar__item progress-bar__item--third"></div>
      </div>
    </div>
  </div>`;
}

const generateHTMLForActiveOrders = (activeOrders) => {
  coming_up.innerHTML = "";
  const coming_upHTML = activeOrders
    .map((order) => {
      return getActiveOrder(order);
    })
    .join("");

    coming_up.innerHTML = coming_upHTML;
};

generateHTMLForActiveOrders(activeOrders);

function getPreviousOrder(order) {
  return `
  <div class="previous__item previous-item">
    <div class="previous-item__header">
      <h4 class="h4">${order.getRestaurant()}</h4>
      <div class="badge badge--green">Completed</div>
    </div>

    <div class="previous-item-info">
      <div class="previous-item-info__date">${order.getFormattedDate()}</div>
      <div class="previous-item-info__time">${order.getFormattedTime()}</div>
    </div>

    <ul class="previous-item-dishes">
      ${order.getOrders().map(item => 
        `<li class="previous-item-dishes__item">
          <span class="previous-item-dishes__quantity">${item.count}</span>
          ${item.title}
        </li>`).join('')}
    </ul>
  </div>`;
}
const generateHTMLForPreviousOrders = (previousOrders) => {
  previous.innerHTML = "";
  const previousHTML = previousOrders
    .map((order) => {
      return getPreviousOrder(order);
    })
    .join("");

    previous.innerHTML = previousHTML;
};

generateHTMLForPreviousOrders(previousOrders);