import BaseComponent from "../common/BaseComponent.js";
import Kanban from "../model/Kanban.js";
import { getChildElement } from "../utils/dom.js";
import Item from "./Item.js";

export default class Board extends BaseComponent {
  private kanban: Kanban;
  handleDeleteTodo: DeleteTodoHandler;
  handleDeleteTag: DeleteTagHandler;

  constructor(
    parent: HTMLElement,
    kanban: Kanban,
    handleDrag: DragHandler,
    handleDeleteTodo: DeleteTodoHandler,
    handleDeleteTag: DeleteTagHandler
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
    this.handleDeleteTodo = handleDeleteTodo;
    this.handleDeleteTag = handleDeleteTag;
  }

  bindEvent(handleDrag: DragHandler) {
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
    console.log(this.kanban);

    const itemCategoryKeys = Object.keys(
      this.kanban.kanbanItems
    )! as TodoCategory[];

    itemCategoryKeys.forEach((categoryKey: TodoCategory) => {
      const CategoryContainer = getChildElement(
        this.element,
        `.${categoryKey}--container`
      );
      CategoryContainer.innerHTML = "";

      this.kanban.kanbanItems[categoryKey].forEach((item) => {
        new Item(
          CategoryContainer,
          item,
          categoryKey,
          this.handleDeleteTodo,
          this.handleDeleteTag
        );
      });
    });
  }
}
