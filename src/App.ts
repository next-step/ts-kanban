import Kanban from './Kanban.js';
import { KanbanData, LabelData, TodoData } from './types.js';
import Todo from './Todo.js';
import Label from './Label.js';
import TodoList from './TodoList.js';
import LabelList from './LabelList.js';
import {uid} from "./utils";

interface AppData {
  archive: Kanban;
  kanbans: Kanban[];
}

class App {
  #data: AppData = {
    archive: new Kanban('Archive'),
    kanbans: [],
  };

  // NOTE: 왜 필요한지 ?
  createTodo(): Todo {}

  // NOTE: 새로운 칸반은 외부에서 받도록 변경하면 좋을 것 같음.
  createNewKanban(): Kanban {
    const newKanban = new Kanban('진행중')
    return newKanban;
  }

  // NOTE: 왜 필요한지 ?
  createLabel(): Label {}

  // NOTE: 왜 필요한지 ?
  createTodoList(): TodoList {}

  // NOTE: 왜 필요한지 ?
  createLabelList(): LabelList {}

  // NOTE: fromId, toId가 필요할 것 같음
  changeKanbanIndex(kanbanId: KanbanData['id']): boolean {}

  // NOTE: kanbanId 매개변수는 필요 없을 것 같음
  sortKanbanById(kanbanId: KanbanData['id']): boolean {
    this.#data.kanbans = this.#data.kanbans.sort((prev,current) => {
      if(prev.data.id < current.data.id) {
        return 1;
      }

      if(prev.data.id > current.data.id) {
        return -1;
      }

      return 0;
    });
  }

  addKanban(kanban: Kanban): boolean {
    this.#data.kanbans = [...this.#data.kanbans, this.createNewKanban()];
    return true;
  }

  updateKanbanTitle(kanbanId: KanbanData['id'], newTitle: KanbanData['title']): boolean {
    const selectedKanban = this.#data.kanbans.find(kanban => kanban.data.id === kanbanId)!;
    selectedKanban.setTitle(newTitle);
    return true;
  }

  deleteKanban(kanbanId: KanbanData['id']): boolean {
    this.#data.kanbans = this.#data.kanbans.filter(kanban => kanban.id !== kanbanId);
    return true;
  }

  moveAllTodosToArchive(kanbanId: KanbanData['id']): boolean {
    const selectedKanban = this.#data.kanbans.find(kanban => kanban.data.id === kanbanId)!;
    const selectedKanbanTodoList = selectedKanban.data.todoList;

    selectedKanbanTodoList.data.forEach((todo) => this.#data.archive.data.todoList.addTodo(todo));
    selectedKanbanTodoList.deleteAllTodo();
    return true;
  }

  addTodoToKanban(kanbanId: KanbanData['id'], todo: Todo): boolean {
    const selectedKanban = this.#data.kanbans.find(kanban => kanban.data.id === kanbanId)!;
    selectedKanban.data.todoList.addTodo(todo);
    return true;
  }

  // NOTE: 타켓 칸반 id, 선택된 칸반 id 두개가 필요할 것 같음
  moveTodoToAnotherKanban(kanbanId: KanbanData['id'], todoId: TodoData['id']): boolean {}
}
