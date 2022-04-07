/**
 * @file TodoItem 클래스 파일
 * @author tiaz0128(주환석)
 */

import TodoItem from "./TodoItem.js";

/**
 * Kanban 클래스
 * @class
 * @constructor
 * @public
 */
export default class Kanban implements KanbanType {
  /** @member {KanbanItemType} */
  kanbanItems: KanbanItemType;

  /**
   * @constructs
   */
  constructor() {
    this.kanbanItems = { todo: [], doing: [], done: [] };
  }

  /**
   * 유니크한 id 값 문자열을 리턴
   * @param {void}
   * @returns {string}
   */
  getUniqueId() {
    return new Date().getTime().toString();
  }

  /**
   * 카테고리에 todoItem 생성
   * @param {InitTodoItemType} initTodoItem content 필수. 나머지는 옵션널, 기본값을 세팅
   * @returns {void}
   * @todo category 를 기본값 "todo"로 todoitem 생성
   */
  createTodo(initTodoItem: InitTodoItemType) {
    const id = this.getUniqueId();
    const todo = new TodoItem({ id, ...initTodoItem });

    const newState = {
      ...this.kanbanItems,
      todo: [...this.kanbanItems["todo"], todo],
    };
    this.setState(newState);
  }

  /**
   * id 값에 해당하는 todoitem 출력
   * @param {TodoCategory} category 카테고리 "todo" | "doing" | "done"
   * @param {string} id todoitem의 아이디값
   * @returns {void}
   */
  readTodo(category: TodoCategory, id: TodoType["id"]) {
    console.log(`=== ${category} ===`);
    this.kanbanItems[category].find((todo) => todo.id === id)?.printTodo();
  }

  /**
   * 전체 todo 또는 각 카테고리 전체 todo 읽기
   * @param {TodoCategory} [category] "todo" | "doing" | "done"
   * @returns {void}
   * @todo 1. category 파라미터가 없는 경우 -> 모든 카테고리 todo 출력
   * @todo 2. category 파라미터가 있는 경우 -> 해당 카테고리 todo 만 출력
   */
  readTodos(category?: TodoCategory) {
    if (!category) {
      console.log("=== todo ===");
      this.kanbanItems["todo"].forEach((todo) => todo.printTodo());

      this.kanbanItems["doing"].length && console.log("=== doing ===");
      this.kanbanItems["doing"].forEach((todo) => todo.printTodo());

      this.kanbanItems["done"].length && console.log("=== done ===");
      this.kanbanItems["done"].forEach((todo) => todo.printTodo());
      return;
    }

    console.log(`=== ${category} ===`);
    if (this.kanbanItems[category].length > 0) {
      return this.kanbanItems[category].forEach((todo) => todo.printTodo());
    }
  }

  /**
   * id 값에 해당하는 todoitem 업데이트
   * @param {TodoCategory} category 카테고리 "todo" | "doing" | "done"
   * @param {string} id  todoitem의 아이디값
   * @param {InitTodoItemType} updatedTodo content 는 필수. 나머지는 옵션널
   * @returns {void}
   */
  updateTodo(
    category: TodoCategory,
    id: TodoType["id"],
    updatedTodo: Partial<Omit<TodoItemType, "id" | "printTodo">>
  ) {
    const newTodos = this.kanbanItems[category].map((todo) => {
      if (todo.id === id) {
        return new TodoItem({ ...todo, ...updatedTodo });
      }
      return todo;
    });

    const newState = { ...this.kanbanItems };
    newState[category] = newTodos;

    this.setState(newState);
  }

  /**
   * id 값에 해당하는 todoitem 의 category 업데이트
   * @param {TodoCategory} prevCategory "todo" | "doing" | "done"
   * @param {string} id  todoitem의 아이디값
   * @param {TodoCategory} nextCategory "todo" | "doing" | "done"
   * @returns {void}
   */
  updateCategory(
    prevCategory: TodoCategory,
    id: TodoType["id"],
    nextCategory: TodoCategory
  ) {
    const addedTodo = this.kanbanItems[prevCategory].filter(
      (todo) => todo.id === id
    );
    const deletedTodos = this.kanbanItems[prevCategory].filter(
      (todo) => todo.id !== id
    );

    const newTodos = [...this.kanbanItems[nextCategory], ...addedTodo];

    const newState = { ...this.kanbanItems };

    newState[prevCategory] = deletedTodos;
    newState[nextCategory] = newTodos;

    this.setState(newState);
  }

  /**
   * id 값에 해당하는 todoitem 삭제
   * @param {TodoCategory} prevCategory 카테고리 "todo" | "doing" | "done"
   * @param {string} id todoitem의 아이디값
   * @returns {void}
   */
  deleteTodo(category: TodoCategory, id: TodoType["id"]) {
    const newTodos = this.kanbanItems[category].filter(
      (todo) => todo.id !== id
    );

    const newState = { ...this.kanbanItems };
    newState[category] = newTodos;

    this.setState(newState);
  }

  /**
   * 업데이트
   * @param {KanbanItemType} newState 카테고리 "todo" | "doing" | "done"
   */
  setState(newState: KanbanItemType) {
    this.kanbanItems = newState;
  }

  /**
   * id 값에 해당하는 todoitem 에서 해당하는 태그 삭제
   * @param {TodoCategory} prevCategory 카테고리 "todo" | "doing" | "done"
   * @param {string} id todoitem의 아이디값
   * @param {string} tagName 태그 이름
   * @returns {void}
   */
  deleteTag(category: TodoCategory, id: TodoType["id"], tagName: string) {
    const newTodos = this.kanbanItems[category].map((todo) => {
      if (todo.id === id)
        return new TodoItem({
          ...todo,
          tags: todo.tags.filter((tag) => tag !== tagName),
        });
      return todo;
    });

    const newState = { ...this.kanbanItems };
    newState[category] = newTodos;

    this.setState(newState);
  }
}
