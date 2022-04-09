import BaseComponent from "../common/BaseComponent.js";
import { getChildElement } from "../utils/dom.js";

export default class Item extends BaseComponent {
  constructor(parent: HTMLElement, todo: TodoItemType, category: TodoCategory) {
    const { id, content, tags } = todo;

    super(`<div class="todo--item" draggable="true">
            <div class="todo--title"></div>
            <div class="tag--container"></div>
          </div>`);

    this.element.setAttribute("data-todo-id", id);
    this.element.setAttribute("data-category", category);

    const title = getChildElement(this.element, ".todo--title");
    title.textContent = content;

    const tagContainer = getChildElement(this.element, ".tag--container");
    tags.forEach((tag: string) => {
      const tagElement = document.createElement("span");
      tagElement.classList.add("tag");
      tagElement.textContent = tag;

      tagContainer.insertAdjacentElement("beforeend", tagElement);
    });

    this.attachTo(parent, "beforeend");
  }
}
