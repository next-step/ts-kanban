import TodoItem from './TodoItem';

interface EditItemOptions {
  content?: TodoItem['content'];
  category?: TodoItem['category'];
  isFinished?: TodoItem['isFinished'];
  tags?: TodoItem['tags'];
}

export default class TodoList {
  list: TodoItem[] = [];

  addItem(todoItem: TodoItem) {
    this.list.push(todoItem);
  }

  getItemById(id: TodoItem['id']): TodoItem {
    return this.list.find(todo => todo.id === id);
  }

  getItemAll(): TodoItem[] {
    return this.list;
  }

  editItemById(id: TodoItem['id'], options: EditItemOptions) {
    let item = this.getItemById(id);
    item.updateTodoItem(options);
  }

  removeItemById(id: TodoItem['id']) {
    this.list = this.list.filter(item => item.id !== id);
  }

  removeItemAll() {
    this.list = [];
  }
}
