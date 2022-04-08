import BaseComponent from "./common/BaseComponent.js";
import Board from "./components/Borad.js";
import Inputs from "./components/Inputs.js";
import Kanban from "./model/Kanban.js";

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

    const inputsContainer = this.element.querySelector(
      ".todo-inputs"
    )! as HTMLElement;

    this.inputs = new Inputs(inputsContainer, this.handleAdd);

    const boardContainer = this.element.querySelector(
      ".kanban-board"
    )! as HTMLElement;
    this.board = new Board(boardContainer, this.kanban);
  }

  handleAdd = () => {
    this.kanban.createTodo({ content: "test", tags: ["abc", "123"] });
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
