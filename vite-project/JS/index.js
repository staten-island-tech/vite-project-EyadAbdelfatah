import "../css/style.css";
import { games } from "./games.js";
const DOMSelectors = {
  theme: document.querySelector("#Theme"),
  container: document.querySelector(".container"),
  price: document.querySelector("#price"),
  rating: document.querySelector("rating"),
};

function CreateCards(arr) {
  arr.forEach((game) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeEnd",
      `<div class="card">
      <h2>${game.name}</h2>
      <img src="${game.img}" alt="">
      <h2 class="card-price">${game.price}</h2>
      <h2 class="card-price">${game.rating}</h2>
    </div>`
    )
  );
}
CreateCards(games);
function sortPrice(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
}
sortPrice(games);
