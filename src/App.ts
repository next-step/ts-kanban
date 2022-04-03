import Kanban from './Kanban';
import TodoItem from './TodoItem';

interface EditKanbanOptions {
  title: Kanban['title'];
}

export default class App {
  kanbans: Kanban[] = [];
  archiveKanban: Kanban = new Kanban({ title: 'archive' });

  addKanban(kanban: Kanban) {
    this.kanbans.push(kanban);
  }

  getKanbanById(id: Kanban['id']): Kanban {
    return this.kanbans.find(kanban => kanban.id === id);
  }

  getKanbanAll(): Kanban[] {
    return this.kanbans;
  }

  editKanbanOrder(id: Kanban['id'], prevIndex: number, nextIndex: number) {
    const editKanban = this.kanbans.splice(prevIndex, 1);
    this.kanbans.splice(nextIndex, 0, ...editKanban);
  }

  editKanbanTitle(id: Kanban['id'], options: EditKanbanOptions) {
    const kanban = this.getKanbanById(id);
    kanban.title = options.title;
  }

  moveTodoItem(
    todoItemId: TodoItem['id'],
    prevKanbanId: Kanban['id'],
    nextKanbanId: Kanban['id']
  ) {
    const prevKanbanTodoList = this.getKanbanById(prevKanbanId).todoList;
    const nextKanbanTodoList = this.getKanbanById(nextKanbanId).todoList;
    const todoItem = prevKanbanTodoList.getItemById(todoItemId);
    nextKanbanTodoList.addItem(todoItem);
    prevKanbanTodoList.removeItemById(todoItemId);
  }

  removeKanbanById(id: Kanban['id']) {
    // 삭제된 칸반의 기존 할 일은 모두 Archive칸반으로 이동한다.
    const removeKanban = this.kanbans.splice(id, 1)[0];
    const archiveKanban = this.kanbans.find(
      kanban => kanban.title === 'archive'
    );

    archiveKanban.todoList.list = [
      ...archiveKanban.todoList.list,
      ...removeKanban.todoList.list,
    ];
  }
}
