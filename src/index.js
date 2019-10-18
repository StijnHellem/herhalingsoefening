import './style.css';
import {devineLog} from './js/utility/helpers';
import data from './assets/data/coffees.json';

console.log(data);
console.log(data.coffees);

data.coffees.forEach(drink => {
  if (drink.plantbased === true) {
    document.querySelector(`.prices__list`).innerHTML += `
    <li class="price data-id="${drink.id}">
    <a class="price__button">
      <span class="price__button__wrapper">
        <span class="price__button__name">${drink.name}</span>
        <span class="price__button__amount">&euro; ${drink.prices.medium}</span>
      </span>
      <span class="price__button__plus">+</span>
    </a>
    </li>
    `;
  }
});
devineLog('Hey, ik ben een JS file');
const arr = [1, 2,  3];

const ES6Stuff = () => devineLog('Ik kan ES6 stuff aan', ...arr);
ES6Stuff();
