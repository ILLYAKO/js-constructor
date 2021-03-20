import { model } from "./model";
// import { templates } from "./templates";
import "./styles/main.css";

const $site = document.querySelector("#site"); // The variable $site is a simple variable, but came from the DOM

model.forEach((block) => {
  $site.insertAdjacentHTML("beforeend", block.toHTML());
});
