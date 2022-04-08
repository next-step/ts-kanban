import BaseComponent from "../common/BaseComponent.js";
import { getChildElement } from "../utils/dom.js";
export default class Inputs extends BaseComponent {
    constructor(parent, handleAdd) {
        super(`<div>
            <label>할 일 : </label>
            <input id="todo-input" />
            <label>tags : </label>
            <input id="tags-input" />
            <button id="add-btn">Add</button>
          <div>`);
        this.content = "";
        this.tagsRawStr = "";
        this.attachTo(parent, "beforeend");
        this.bindEvent(handleAdd);
    }
    bindEvent(handleAdd) {
        const todoContentInput = getChildElement(this.element, "#todo-input");
        const tagsInput = getChildElement(this.element, "#tags-input");
        const addBtn = getChildElement(this.element, "#add-btn");
        todoContentInput.onkeyup = (e) => {
            const content = e.target.value;
            this.content = content;
        };
        tagsInput.onkeyup = (e) => {
            const tagsRawStr = e.target.value;
            this.tagsRawStr = tagsRawStr;
        };
        addBtn.onclick = () => {
            if (this.content === "")
                return;
            const tags = this.tagsRawStr
                .split(/,/)
                .filter((text) => text.trim() !== "")
                .map((text) => text.trim());
            handleAdd({ content: this.content, tags });
            todoContentInput.value = "";
            tagsInput.value = "";
            this.tagsRawStr = "";
            this.content = "";
        };
    }
}
