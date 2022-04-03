import Todo from './Todo.js';
import { TodoData } from './types.js';

export default class TodoList {
  #todoList: Todo[] = [];

  get data(): Todo[] {}

  getTodoById(todoId: TodoData['id']): Todo {}

  updateTodoById(todoId: TodoData['id'], updateProperties: Partial<TodoData>): boolean {}

  addTodo(newTodo: Todo): boolean {}

  deleteTodoById(deletedTodoId: TodoData['id']): boolean {}

  deleteAllTodo(): boolean {}
}
