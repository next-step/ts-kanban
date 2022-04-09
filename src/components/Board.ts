import BaseComponent from "../common/BaseComponent.js";
import Kanban from "../model/Kanban.js";
import { getChildElement } from "../utils/dom.js";
import Item from "./Item.js";

export default class Board extends BaseComponent {
  private kanban: Kanban;

  constructor(
    parent: HTMLElement,
    kanban: Kanban,
    handleDrag: (
      prevCategory: TodoCategory,
      id: string,
      nextCategory: TodoCategory
    ) => void
  ) {
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

  bindEvent(
    handleDrag: (
      prevCategory: TodoCategory,
      id: string,
      nextCategory: TodoCategory
    ) => void
  ) {
    const boards = document.querySelectorAll<HTMLDivElement>(".board");
    let dragCategory: TodoCategory;
    let dragTodoId: string = "";
    let dropCategory: TodoCategory;

    boards.forEach((board) => {
      board.ondragstart = (e) => {
        const dataset = (e.target as HTMLElement).dataset;

        const todoId = dataset.todoId!;
        const category = dataset.category!;

        dragTodoId = todoId;
        dragCategory = category as TodoCategory;
      };

      board.ondragenter = (e: Event) => {
        dropCategory = (
          (e.target as HTMLElement).closest(".board")! as HTMLElement
        ).dataset.category! as TodoCategory;
      };

      board.ondragend = (e) => {
        if (dragCategory !== dropCategory)
          handleDrag(dragCategory, dragTodoId, dropCategory);
      };
    });
  }

  setState(newState: Kanban) {
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
