import { block } from "../utils";
export class Sidebar {
  constructor(selector) {
    this.$el = document.querySelector(selector);

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.addEventListener("submit", this.addBlock);
  }

  get template() {
    return [block("title"), block("text")].join("");
  }

  addBlock(event) {
    event.preventDefault();
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;
  }
}
