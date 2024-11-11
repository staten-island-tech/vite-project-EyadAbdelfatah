import "../css/style.css";
import { games } from "./games.js";
const DOMSelectors = {
  button: document.querySelector("#Theme"),
  container: document.querySelector(".container"),
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
