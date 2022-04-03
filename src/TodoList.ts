import Todo from './Todo.js';
import { TodoData } from './types.js';

export default class TodoList {
  #todoList: Todo[] = [];

  get data(): Todo[] {
    return this.#todoList;
  }

  getTodoById(todoId: TodoData['id']): Todo {
    return this.#todoList.slice(0).find(todo => todo.data.id === todoId)!;
  }

  // NOTE: updateProperties는 Pick으로 필요한 아이들만 빼오면 더 좋을 것 같음.
  // NOTE: 업데이트하는 영역마다 메서드로 뺴주면 좋을 것 같음.
  // NOTE: 반환값이 boolean인 이유가 있을까요?
  updateTodoById(todoId: TodoData['id'], updateProperties: Partial<TodoData>): boolean {
    const selectedTodo = this.getTodoById(todoId);

    if(Object.hasOwnProperty.call(updateProperties,'id')) {
      throw new Error('유효하지 않는 업데이트 프로퍼티 입니다.');
    }

    if(Object.hasOwnProperty.call(updateProperties,'labelList')) {
      throw new Error('유효하지 않는 업데이트 프로퍼티 입니다.');
    }

    if(Object.hasOwnProperty.call(updateProperties,'isDone')) {
      selectedTodo.setisDone(updateProperties.isDone as TodoData['isDone']);
    }

    if(Object.hasOwnProperty.call(updateProperties,'category')) {
      selectedTodo.setCategory(updateProperties.category as TodoData['category']);
    }

    if(Object.hasOwnProperty.call(updateProperties,'content')) {
      selectedTodo.setContent(updateProperties.content as TodoData['content']);
    }

    return true;
  }

  addTodo(newTodo: Todo): boolean {
    this.#todoList = [...this.#todoList, newTodo];
    return true;
  }

  deleteTodoById(deletedTodoId: TodoData['id']): boolean {
    this.#todoList = this.#todoList.filter(todo => todo.data.id !== deletedTodoId);
    return true;
  }

  deleteAllTodo(): boolean {
    this.#todoList = [];
    return true;
  }
}
