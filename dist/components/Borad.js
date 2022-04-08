import BaseComponent from "../common/BaseComponent.js";
import Item from "./Item.js";
export default class Board extends BaseComponent {
    constructor(parent, kanban) {
        super(`<div class="board-cotainer">
            <div class="board">
              <h2>todo</h2>
              <div class="todo--contianer"></div>
            </div>
            <div class="board">
              <h2>doing</h2>
              <div class="doing--contianer"></div>
            </div>
            <div class="board">
              <h2>done</h2>
              <div class="done--contianer"></div>
            <div>
          <div>`);
        this.kanban = kanban;
        this.attachTo(parent, "beforeend");
    }
    setState(newState) {
        this.kanban = newState;
    }
    render() {
        const todoContainer = this.element.querySelector(".todo--contianer");
        todoContainer.innerHTML = "";
        this.kanban.kanbanItems.todo.forEach((item) => {
            console.log(item);
            new Item(todoContainer, item);
        });
        const doingContainer = this.element.querySelector(".doing--contianer");
        doingContainer.innerHTML = "";
        this.kanban.kanbanItems.doing.forEach((item) => {
            new Item(todoContainer, item);
        });
        const doneContainer = this.element.querySelector(".done--contianer");
        doneContainer.innerHTML = "";
        this.kanban.kanbanItems.done.forEach((item) => {
            new Item(todoContainer, item);
        });
    }
}
