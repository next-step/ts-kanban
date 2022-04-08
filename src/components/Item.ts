import BaseComponent from "../common/BaseComponent.js";
import { getChildElement } from "../utils/dom.js";

export default class Item extends BaseComponent {
  constructor(parent: HTMLElement, todo: any) {
    super(`<div class="todo--item" draggable="true">
            <div class="todo--title"></div>
            <div class="tag--container"></div>
          </div>`);

    this.element.setAttribute("data-todo-id", todo.id);

    const title = getChildElement(this.element, ".todo--title");
    title.textContent = todo.content;

    const tags = getChildElement(this.element, ".tag--container");
    todo.tags.forEach((tag: string) => {
      const tagElement = document.createElement("span");
      tagElement.classList.add("tag");
      tagElement.textContent = tag;

      tags.insertAdjacentElement("beforeend", tagElement);
    });

    this.attachTo(parent, "beforeend");
  }
}
