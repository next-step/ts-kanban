import BaseComponent from "../common/BaseComponent.js";

export default class Inputs extends BaseComponent {
  constructor(parent: HTMLElement, handleAdd: () => void) {
    super(`<div>
            <label>할 일 : </label>
            <input id="todo-input" />
            <label>tags : </label>
            <input id="tags-input" />
            <button id="add-btn">Add</button>
          <div>`);

    this.attachTo(parent, "beforeend");
    this.bindEvent(handleAdd);
  }

  bindEvent(handleAdd: () => void) {
    const todoInput = this.element.querySelector(
      "#todo-input"
    )! as HTMLInputElement;

    const tagsInput = this.element.querySelector(
      "#tags-input"
    )! as HTMLInputElement;

    const addBtn = this.element.querySelector("#add-btn")! as HTMLButtonElement;

    todoInput.onkeydown = (e) => {};

    tagsInput.onkeydown = (e) => {};

    addBtn.onclick = () => {
      // create todo 호출
      handleAdd();
    };
  }
}
