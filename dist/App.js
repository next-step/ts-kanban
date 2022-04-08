import BaseComponent from "./common/BaseComponent.js";
import Board from "./components/Borad.js";
import Inputs from "./components/Inputs.js";
import Kanban from "./model/Kanban.js";
export default class App extends BaseComponent {
    constructor(appRoot) {
        super(`<main>
            <section>
              <h1>TS-Kanban Board</h1>
            </section>
            <section class="todo-inputs"></section>
            <section class="kanban-board"></section>
          </main>`);
        this.kanban = new Kanban();
        this.handleAdd = (initTodoItem) => {
            this.kanban.createTodo(initTodoItem);
            this.setState();
        };
        this.attachTo(appRoot, "beforeend");
        const inputsContainer = this.element.querySelector(".todo-inputs");
        this.inputs = new Inputs(inputsContainer, this.handleAdd);
        const boardContainer = this.element.querySelector(".kanban-board");
        this.board = new Board(boardContainer, this.kanban);
    }
    render() {
        this.board.render();
    }
    setState() {
        this.board.setState(this.kanban);
        this.render();
    }
}
