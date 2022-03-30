import Kanban from './Kanban.js';
import { KanbanData, LabelData, TodoData } from './types.js';
import Todo from './Todo.js';
import Label from './Label.js';
import TodoList from './TodoList.js';
import LabelList from './LabelList.js';

interface AppData {
  archive: Kanban;
  kanbans: Kanban[];
}

class App {
  #data: AppData = {
    archive: new Kanban('Archive'),
    kanbans: [],
  };

  createTodo(): Todo {}

  createNewKanban(): Kanban {}

  createLabel(): Label {}

  createTodoList(): TodoList {}

  createLabelList(): LabelList {}

  changeKanbanIndex(kanbanId: KanbanData['id']): boolean {}

  sortKanbanById(kanbanId: KanbanData['id']): boolean {}

  addKanban(kanban: Kanban): boolean {}

  updateKanbanTitle(kanbanId: KanbanData['id'], newTitle: KanbanData['title']): boolean {}

  deleteKanban(kanbanId: KanbanData['id']): boolean {}

  moveAllTodosToArchive(kanbanId: KanbanData['id']): boolean {}

  addTodoToKanban(kanbanId: KanbanData['id'], todo: Todo): boolean {}

  moveTodoToAnotherKanban(kanbanId: KanbanData['id'], todoId: TodoData['id']): boolean {}
}
