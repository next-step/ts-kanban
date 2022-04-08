import BaseComponent from "../common/BaseComponent.js";
export default class Item extends BaseComponent {
    constructor(parent, todo) {
        super(`<div class="todo--item" draggable="true">
            <div class="todo--title"></div>
            <div class="tag--container"></div>
          </div>`);
        this.element.setAttribute("data-todo-id", todo.id);
        const title = this.element.querySelector(".todo--title");
        title.textContent = todo.content;
        const tags = this.element.querySelector(".tag--container");
        //["TEST", "ABC"]
        todo.tags.forEach((tag) => {
            const tagElement = document.createElement("span");
            tagElement.classList.add("tag");
            tagElement.textContent = tag;
            tags.insertAdjacentElement("beforeend", tagElement);
        });
        this.attachTo(parent, "beforeend");
    }
}
