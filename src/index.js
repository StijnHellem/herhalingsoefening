import './style.css';
import {devineLog} from './js/utility/helpers';
import data from './assets/data/coffees.json';

console.log(data);
console.log(data.coffees);
const plantbasedCoffees = data.coffees.filter(coffee => coffee.plantbased === true);
console.log(plantbasedCoffees);
plantbasedCoffees.forEach(drink => {
  //console.log(parseInt(drink.id));
  document.querySelector(`.prices__list`).innerHTML += `
    <li class="price">
    <a class="price__button">
      <span class="price__button__wrapper">
        <span class="price__button__name">${drink.name}</span>
        <span class="price__button__amount">&euro; ${drink.prices.medium}</span>
      </span>
      <span class="price__button__plus" data-id="${parseInt(drink.id) - 1}" data-amount="0">+</span>
    </a>
    </li>
    `;

});


const handleClickField = e => {
  e.target.setAttribute(`data-amount`, parseInt(e.target.dataset.amount) + 1);

  // console.log(data.coffees[e.target.dataset.id].prices.medium);
  // console.log(plantbasedCoffees[e.target.dataset.id].name);

  if (e.target.dataset.amount < 2) {
    document.querySelector(`.orders`).innerHTML += `
      <li class="order" data-id="${e.target.dataset.id}">
                    <span class="order__name">
                      <span class="order__amount">${e.target.dataset.amount}x</span> ${plantbasedCoffees[e.target.dataset.id].name}
                    </span>
                    <span class="order__price">&euro; ${plantbasedCoffees[e.target.dataset.id].prices.medium}</span>
                    <button class="remove">
                      x
                    </button>
                  </li>
      `;
  }
  else {
    document.querySelectorAll(`.order`).forEach(order => {

      if (order.dataset.id === e.target.dataset.id) {

        order.innerHTML = `
        <span class="order__name">
        <span class="order__amount">${e.target.dataset.amount}x</span> ${plantbasedCoffees[e.target.dataset.id].name}
      </span>
      <span class="order__price">&euro; ${e.target.dataset.amount * plantbasedCoffees[e.target.dataset.id].prices.medium}</span>
      <button class="remove">
        x
      </button>`;
      }
    });
    // document.querySelector(`.order__amount`).textContent = `${e.target.dataset.amount}`;
  }
  const $total = document.querySelectorAll(`.order__price`);
  $total.forEach(order => {
    console.log(order.textContent.split(' '));
    const split = order.textContent.split(' ');
    console.log(parseInt(split[1]));

  });
};



document.querySelectorAll(`.price__button__plus`).forEach(button => {
  button.addEventListener(`click`, handleClickField);
});



devineLog('Hey, ik ben een JS file');
const arr = [1, 2,  3];

const ES6Stuff = () => devineLog('Ik kan ES6 stuff aan', ...arr);
ES6Stuff();
