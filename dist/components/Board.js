import BaseComponent from "../common/BaseComponent.js";
import { getChildElement } from "../utils/dom.js";
import Item from "./Item.js";
export default class Board extends BaseComponent {
    constructor(parent, kanban, handleDrag) {
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
        const todoContainer = getChildElement(this.element, ".todo--container");
        todoContainer.innerHTML = "";
        console.log(this.kanban);
        this.kanban.kanbanItems.todo.forEach((item) => {
            new Item(todoContainer, item, "todo");
        });
        const doingContainer = getChildElement(this.element, ".doing--container");
        doingContainer.innerHTML = "";
        this.kanban.kanbanItems.doing.forEach((item) => {
            new Item(doingContainer, item, "doing");
        });
        const doneContainer = getChildElement(this.element, ".done--container");
        doneContainer.innerHTML = "";
        this.kanban.kanbanItems.done.forEach((item) => {
            new Item(doneContainer, item, "done");
        });
    }
}
