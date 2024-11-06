import "../css/style.css";
import { blenders } from "./blenders.js";
const DOMSelectors = {
  button: document.querySelector("#Theme"),
  container: document.querySelector(".conatiner"),
};

function CreateCards(arr) {
  arr.forEach((blender) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeEnd",
      `<div class="card">
      <h2>${blender.name}</h2>
      <img src="${blender.img}" alt="">
      <h2 class="card-price">${blender.price}</h2>
    </div>`
    )
  );
}
CreateCards(blenders);
