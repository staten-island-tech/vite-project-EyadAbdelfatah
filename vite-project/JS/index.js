import "../css/style.css";
import { games } from "./products.js";
const DOMSelectors = {
  theme: document.querySelector("#Theme"),
  container: document.querySelector(".container"),
  price: document.querySelector("#price"),
  rating: document.querySelector("#rating"),
  reset: document.querySelector("#reset"),
  filter:document.querySelector("#filterForm"),
  ratingInput: document.querySelector("#ratingInput"),
};
function CreateCards(arr) {
  clear()
  arr.forEach((game) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeEnd",
      `<div class="card">
        <h3>${game.name}</h3>
        <img src="${game.img}" alt="${game.alt}">
        <h3 class="card-price">$${game.price}</h3>
        <h3 class="card-rating">Rating: ${game.rating}</h3>
      </div>`
    )
  );
}
function toggleTheme() {
  const isCoolTheme = document.body.classList.contains("cool");
  if (isCoolTheme) {
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
  }
}
reset(games);

function sortPrice(arr) {
  arr.sort((a, b) => a.price - b.price);
  clear();
  CreateCards(arr);
}
function sortRating(arr) {
  arr.sort((a, b) => b.rating - a.rating);
  clear();
  CreateCards(arr);
}
function clear() {
  DOMSelectors.container.innerHTML = "";
}
function reset(arr) {
  arr.sort((a, b) => a.name.localeCompare(b.name));
  clear();
  CreateCards(arr);
}
function filterByRating(event) {

  const rating = DOMSelectors.ratingInput.value;
  const filteredGames = games.filter(game => game.rating >= rating);
  console.log(filteredGames)


  CreateCards(filteredGames);
}
DOMSelectors.price.addEventListener("click", function () {
  sortPrice(games);
});
DOMSelectors.rating.addEventListener("click", function () {
  sortRating(games);
});
DOMSelectors.reset.addEventListener("click", function () {
  reset(games);
});
DOMSelectors.theme.addEventListener("click", function () {
  toggleTheme();
});
DOMSelectors.filter.addEventListener("submit", function () {
  event.preventDefault();
  filterByRating();
});
