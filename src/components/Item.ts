import BaseComponent from "../common/BaseComponent.js";
import { getChildElement } from "../utils/dom.js";

export default class Item extends BaseComponent {
  constructor(
    parent: HTMLElement,
    todo: TodoItemType,
    category: TodoCategory,
    handleDeleteTodo: DeleteTodoHandler,
    handleDeleteTag: DeleteTagHandler
  ) {
    const { id, content, tags } = todo;

    super(`<div class="todo--item" draggable="true">
            <span class="todo--delete--btn">💥</span>
            <div class="todo--title"></div>
            <div class="tag--container"></div>
          </div>`);

    this.element.setAttribute("data-todo-id", id);
    this.element.setAttribute("data-category", category);

    const itemDeleteBtn = getChildElement(this.element, ".todo--delete--btn");
    itemDeleteBtn.onclick = () => {
      handleDeleteTodo(category, id);
    };

    const title = getChildElement(this.element, ".todo--title");
    title.textContent = content;

    const tagContainer = getChildElement(this.element, ".tag--container");
    tags.forEach((tag: string) => {
      const tagElement = document.createElement("div");

      tagElement.classList.add("tag");
      tagElement.textContent = tag;

      const deleteBtn = document.createElement("span");
      deleteBtn.textContent = "x";
      deleteBtn.classList.add("tag--delete--btn");
      deleteBtn.onclick = () => {
        handleDeleteTag(category, id, tag);
      };

      tagElement.insertAdjacentElement("beforeend", deleteBtn);

      tagContainer.insertAdjacentElement("beforeend", tagElement);
    });

    this.attachTo(parent, "beforeend");
  }
}
