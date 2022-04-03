import { KanbanData, LabelData, TodoData } from './types.js';
import TodoList from './TodoList.js';
import {uid} from "./utils";

export default class Kanban {
  #data: KanbanData = {
    id: '',
    title: '',
    todoList: new TodoList(), // NOTE: constructor에서 주입받는 형식이 좀 더 좋아보임.
  };

  constructor(title: KanbanData['title']) {
    this.#data.id = uid();
    this.#data.title = title;
  }

  get data(): KanbanData {
    return this.#data;
  }

  setTitle(title: KanbanData['title']): boolean {
    this.#data.title = title;
    return true;
  }
}
