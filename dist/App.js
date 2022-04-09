import BaseComponent from "./common/BaseComponent.js";
import Board from "./components/Board.js";
import Inputs from "./components/Inputs.js";
import Kanban from "./model/Kanban.js";
import { getChildElement } from "./utils/dom.js";
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
        this.handleDrag = (prevCategory, id, nextCategory) => {
            this.kanban.updateCategory(prevCategory, id, nextCategory);
            this.setState();
        };
        this.handleDeleteTodo = (category, id) => {
            this.kanban.deleteTodo(category, id);
            this.setState();
        };
        this.handleDeleteTag = (category, id, tagName) => {
            this.kanban.deleteTag(category, id, tagName);
            this.setState();
        };
        this.attachTo(appRoot, "beforeend");
        const inputsContainer = getChildElement(this.element, ".todo-inputs");
        this.inputs = new Inputs(inputsContainer, this.handleAdd);
        const boardContainer = getChildElement(this.element, ".kanban-board");
        this.board = new Board(boardContainer, this.kanban, this.handleDrag, this.handleDeleteTodo, this.handleDeleteTag);
    }
    render() {
        this.board.render();
    }
    setState() {
        this.board.setState(this.kanban);
        this.render();
    }
}
