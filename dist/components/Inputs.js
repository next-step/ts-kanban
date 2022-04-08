import BaseComponent from "../common/BaseComponent.js";
export default class Inputs extends BaseComponent {
    constructor(parent, handleAdd) {
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
    bindEvent(handleAdd) {
        const todoInput = this.element.querySelector("#todo-input");
        const tagsInput = this.element.querySelector("#tags-input");
        const addBtn = this.element.querySelector("#add-btn");
        todoInput.onkeydown = (e) => { };
        tagsInput.onkeydown = (e) => { };
        addBtn.onclick = () => {
            // create todo 호출
            handleAdd();
        };
    }
}
