import Todo from './Todo';
import Tag from './Tag';

interface TodoInterface {
  addTodo(todo: Todo): Todo[];
  findAllTodos(): Todo[];
  findTodoById(todoId: string): Todo;
  updateTodoById(todo: Todo): Todo;
  updateTagById(todoId: string, newTag: Tag): Tag;
  removeTodoById(todoId: string): void;
  removeAllTodo(todoId: string): void;
  removeAllTagByTodoId(todoId: string, tagId: string): void;
  removeTagByTodoIdAndTagId(todoId: string, tagId: string): void;
  logger(): void;
}

export default class Todos implements TodoInterface {
  public todos: Todo[] = [];

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.logger();
    return this.todos;
  }

  findAllTodos() {
    this.logger();
    return this.todos;
  }

  findTodoById(todoId: string) {
    const targetTodo = this.todos.find((todo: Todo) => todo.id === todoId);
    this.logger();
    return targetTodo;
  }

  updateTodoById(todo: Todo) {
    this.todos = this.todos.filter((aTodo: Todo) => aTodo.id !== todo.id);
    this.todos = [...this.todos, todo];
    this.logger();
    return todo;
  }

  updateTagById(todoId: string, newTag: Tag): Tag {
    const todo: Todo = this.todos.find((todo: Todo) => (todo.id = todoId));
    return todo.updateTagByTagId(newTag);
  }

  removeTodoById(todoId: string): void {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
    this.logger();
  }

  removeAllTodo(): void {
    this.todos = [];
    this.logger();
  }

  removeAllTagByTodoId(todoId: string): void {
    this.todos.forEach(todo => {
      if (todo.id === todoId) {
        todo.tags = [];
      }
    });
    this.logger();
  }

  removeTagByTodoIdAndTagId(todoId: string, tagId: string): void {
    this.todos.forEach(todo => {
      if (todo.id === todoId) {
        todo.tags = todo.tags.filter(tag => tag.id !== tagId);
      }
    });
    this.logger();
  }

  logger(): void {
    this.todos?.length
      ? console.table(this.todos)
      : console.warn('Todo가 존재하지 않습니다.');
  }
}
