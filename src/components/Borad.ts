import BaseComponent from "../common/BaseComponent.js";
import Kanban from "../model/Kanban.js";
import { getChildElement } from "../utils/dom.js";
import Item from "./Item.js";

export default class Board extends BaseComponent {
  private kanban: Kanban;

  constructor(parent: HTMLElement, kanban: Kanban) {
    super(`<div class="board-container">
            <div class="board">
              <h2>todo</h2>
              <div class="todo--container"></div>
            </div>
            <div class="board">
              <h2>doing</h2>
              <div class="doing--container"></div>
            </div>
            <div class="board">
              <h2>done</h2>
              <div class="done--container"></div>
            <div>
          <div>`);

    this.kanban = kanban;
    this.attachTo(parent, "beforeend");
  }

  setState(newState: Kanban) {
    this.kanban = newState;
  }

  render() {
    const todoContainer = getChildElement(this.element, ".todo--container");
    todoContainer.innerHTML = "";

    this.kanban.kanbanItems.todo.forEach((item) => {
      console.log(item);
      new Item(todoContainer, item);
    });

    const doingContainer = getChildElement(this.element, ".doing--container");
    doingContainer.innerHTML = "";

    this.kanban.kanbanItems.doing.forEach((item) => {
      new Item(todoContainer, item);
    });

    const doneContainer = getChildElement(this.element, ".done--container");
    doneContainer.innerHTML = "";

    this.kanban.kanbanItems.done.forEach((item) => {
      new Item(todoContainer, item);
    });
  }
}
