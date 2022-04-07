import BaseComponent from "./common/BaseComponent.js";
import Kanban from "./model/Kanban.js";

export default class App extends BaseComponent {
  private kanban = new Kanban();

  constructor(appRoot: HTMLElement) {
    super(`<main>
            <section>
              <h1>TS-Kanban Board</h1>
            </section>
            <section>
              <label>할 일 : </label>
              <input />
              <label>tags : </label>
              <input />
              <button>Add</button>
            </section>
            <section class="board--contianer">
              <div class="board">
                <h2>todo</h2>
                <div class="todo--contianer">
                  <div class="todo--item" draggable="true">
                    <div class="todo--title">할일 1</div>
                    <div class="tag--container">
                      <span class="tag">TS</span>
                      <span class="tag">JS</span>
                    </div>
                  </div>
                  <div class="todo--item">할일 2</div>
                  <div class="todo--item">할일 3</div>
                </div>
              </div>
              <div class="board">
                <h2>doing</h2>
              </div>
              <div class="board">
                <h2>done</h2>
              <div>
            </section>
          </main>`);

    this.attachTo(appRoot, "beforeend");
  }
}
