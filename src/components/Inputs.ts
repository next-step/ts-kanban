import BaseComponent from "../common/BaseComponent.js";
import { getChildElement } from "../utils/dom.js";

export default class Inputs extends BaseComponent {
  content: string;
  tagsRawStr: string;

  constructor(
    parent: HTMLElement,
    handleAdd: (initTodoItem: { content: string; tags: string[] }) => void
  ) {
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

  bindEvent(
    handleAdd: (initTodoItem: { content: string; tags: string[] }) => void
  ) {
    const todoContentInput = getChildElement<HTMLInputElement>(
      this.element,
      "#todo-input"
    );
    const tagsInput = getChildElement<HTMLInputElement>(
      this.element,
      "#tags-input"
    );

    const addBtn = getChildElement<HTMLInputElement>(this.element, "#add-btn");

    todoContentInput.onkeyup = (e: Event) => {
      const content = (e.target as HTMLInputElement).value;
      this.content = content;
    };

    tagsInput.onkeyup = (e: Event) => {
      const tagsRawStr = (e.target as HTMLInputElement).value;
      this.tagsRawStr = tagsRawStr;
    };

    addBtn.onclick = () => {
      if (this.content === "") return;

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
