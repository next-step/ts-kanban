import { KanbanData, LabelData, TodoData } from './types.js';
import TodoList from './TodoList.js';

export default class Kanban {
  #data: KanbanData = {
    id: '',
    title: '',
    todoList: new TodoList(),
  };

  constructor(title: KanbanData['title']) {}

  get data(): KanbanData {}

  setTitle(title: KanbanData['title']): boolean {}
}
