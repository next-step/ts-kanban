import BaseComponent from "./common/BaseComponent.js";
import Board from "./components/Board.js";
import Inputs from "./components/Inputs.js";
import Kanban from "./model/Kanban.js";
import { getChildElement } from "./utils/dom.js";

export default class App extends BaseComponent {
  private kanban = new Kanban();
  private inputs;
  private board;

  constructor(appRoot: HTMLElement) {
    super(`<main>
            <section>
              <h1>TS-Kanban Board</h1>
            </section>
            <section class="todo-inputs"></section>
            <section class="kanban-board"></section>
          </main>`);

    this.attachTo(appRoot, "beforeend");

    const inputsContainer = getChildElement(this.element, ".todo-inputs");
    this.inputs = new Inputs(inputsContainer, this.handleAdd);

    const boardContainer = getChildElement(this.element, ".kanban-board");
    this.board = new Board(boardContainer, this.kanban, this.handleDrag);
  }

  handleAdd = (initTodoItem: { content: string; tags: string[] }) => {
    this.kanban.createTodo(initTodoItem);
    this.setState();
  };

  handleDrag = (
    prevCategory: TodoCategory,
    id: string,
    nextCategory: TodoCategory
  ) => {
    this.kanban.updateCategory(prevCategory, id, nextCategory);

    this.setState();
  };

  render() {
    this.board.render();
  }

  setState() {
    this.board.setState(this.kanban);

    this.render();
  }
}
