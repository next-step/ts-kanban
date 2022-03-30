import TodoList from './TodoList.js';
import LabelList from './LabelList.js';

export interface KanbanData {
  id: string;
  title: string;
  readonly todoList: TodoList;
}

export interface TodoData {
  id: string;
  isDone: boolean;
  content: string;
  category: string;
  readonly labelList?: LabelList;
}

export interface LabelData {
  id: string;
  content: string;
}
