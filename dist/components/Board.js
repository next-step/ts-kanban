import BaseComponent from "../common/BaseComponent.js";
import { getChildElement } from "../utils/dom.js";
import Item from "./Item.js";
export default class Board extends BaseComponent {
    constructor(parent, kanban, handleDrag, handleDeleteTodo, handleDeleteTag) {
        super(`<div class="board-container">
            <div class="board todo" data-category="todo">
              <h2>todo</h2>
              <div class="todo--container todoItem--container"></div>
            </div>
            <div class="board doing" data-category="doing">
              <h2>doing</h2>
              <div class="doing--container todoItem--container"></div>
            </div>
            <div class="board done" data-category="done">
              <h2>done</h2>
              <div class="done--container todoItem--container"></div>
            <div>
          <div>`);
        this.kanban = kanban;
        this.attachTo(parent, "beforeend");
        this.bindEvent(handleDrag);
        this.handleDeleteTodo = handleDeleteTodo;
        this.handleDeleteTag = handleDeleteTag;
    }
    bindEvent(handleDrag) {
        const boards = document.querySelectorAll(".board");
        let dragCategory;
        let dragTodoId = "";
        let dropCategory;
        boards.forEach((board) => {
            board.ondragstart = (e) => {
                const dataset = e.target.dataset;
                const todoId = dataset.todoId;
                const category = dataset.category;
                dragTodoId = todoId;
                dragCategory = category;
            };
            board.ondragenter = (e) => {
                dropCategory = e.target.closest(".board").dataset.category;
            };
            board.ondragend = (e) => {
                if (dragCategory !== dropCategory)
                    handleDrag(dragCategory, dragTodoId, dropCategory);
            };
        });
    }
    setState(newState) {
        this.kanban = newState;
    }
    render() {
        console.log(this.kanban);
        const itemCategoryKeys = Object.keys(this.kanban.kanbanItems);
        itemCategoryKeys.forEach((categoryKey) => {
            const CategoryContainer = getChildElement(this.element, `.${categoryKey}--container`);
            CategoryContainer.innerHTML = "";
            this.kanban.kanbanItems[categoryKey].forEach((item) => {
                new Item(CategoryContainer, item, categoryKey, this.handleDeleteTodo, this.handleDeleteTag);
            });
        });
    }
}
