/**
 * @file TodoItem 클래스 파일
 * @author tiaz0128(주환석)
 */

import TodoItem from "./TodoItem"

/**
 * Kanban 클래스
 * @class
 * @constructor
 * @public
 */
 class Kanban {
  /** @member {KanbanItemType} */
  kanbanItems

  /**
   * @constructs
   */
  constructor(){
    this.kanbanItems = {todo: [], doing: [], done: []}
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
   * @param {InitTodoItemType} initTodoItem 아이디, content 필수. 나머지는 옵션널, 기본값을 세팅
   * @returns {string}
   * @todo category 를 기본값 "todo"로 todoitem 생성
   */
  createTodo(initTodoItem) {
    const id = this.getUniqueId();
    const todo = new TodoItem(initTodoItem);

    const newState = {...kanbanItems, todo: [...this.kanbanItems["todo"], todo]};
    setState(newState);
  }

  /** 
   * id 값에 해당하는 todoitem 출력
   * @param {TodoCategory} category 카테고리 "todo" | "doing" | "done"
   * @param {string} id todoitem의 아이디값
   * @returns {void}
   */
  readTodo(category, id) {
    this.kanbanItems[category].find((todo) => todo.id === id).printTodo();
  }


  /** 
   * 전체 todo 또는 각 카테고리 전체 todo 읽기
   * @param {TodoCategory} [category] "todo" | "doing" | "done"
   * @returns {void}
   * @todo 1. category 파라미터가 없는 경우 -> 모든 카테고리 todo 출력
   * @todo 2. category 파라미터가 있는 경우 -> 해당 카테고리 todo 만 출력
   */
  readTodos(category) {
    if(category) {
      this.kanbanItems["todo"].forEach((todo) => todo.printTodo());
      this.kanbanItems["doing"].forEach((todo) => todo.printTodo());
      this.kanbanItems["done"].forEach((todo) => todo.printTodo());
      return;
    }
    
    if(!this.kanbanItems(category) && this.kanbanItems[category].length > 0) {
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
  updateTodo(category, id, updatedTodo) {
    const newTodos = this.kanbanItems[category].map((todo) => {
      if(todo.id === id) {
        return {...todo, ...updatedTodo}
      }
      return todo;
    });
    
    const newState = { ...this.kanbanItems };
    newState[category] = newTodos;

    this.setState(newState)
  }

  /** 
   * id 값에 해당하는 todoitem 의 category 업데이트
   * @param {TodoCategory} prevCategory "todo" | "doing" | "done"
   * @param {string} id  todoitem의 아이디값
   * @param {TodoCategory} nextCategory "todo" | "doing" | "done"
   * @returns {void}
   */
  updateCategory(prevCategory ,id, nextCategory) {
    const addedTodo = this.kanbanItems[prevCategory].filter((todo) => todo.id === id);
    const deletedTodos = this.kanbanItems[prevCategory].filter((todo) => todo.id !== id);
    
    const newTodos = this.kanbanItems[nextCategory] = [...this.kanbanItems[nextCategory], addedTodo];

    const newState = { ...this.kanbanItems };
    newState[prevCategory] = deletedTodos;
    newState[nextCategory] = newTodos;

    this.setState(this.newState);
  }

  /** 
   * id 값에 해당하는 todoitem 에서 해당하는 태그 삭제
   * @param {TodoCategory} prevCategory 카테고리 "todo" | "doing" | "done"
   * @param {string} id todoitem의 아이디값
   * @param {string} tagName 태그 이름
   * @returns {void}
   */
  deleteTag(category, id, tagName) {
    const newTodos = this.kanbanItems[category].map((todo) => {
      if(todo.id === id) return {...todo, tags: tags.filter((tag) => tag !== tagName)};
      return todo;
    })

    const newState = { ...this.kanbanItems };
    newState[category] = newTodos;

    this.setState(newState);
  }

  /** 
   * id 값에 해당하는 todoitem 삭제
   * @param {TodoCategory} prevCategory 카테고리 "todo" | "doing" | "done"
   * @param {string} id todoitem의 아이디값
   * @returns {void}
   */
  deleteTodo(category, id) {
    const newTodos = this.kanbanItems[category].filter((todo) => todo.id !== id)

    const newState = { ...this.kanbanItems };
    newState[category] = newTodos;

    this.setState(newState);
  }

  /** 
   * 업데이트
   * @param {KanbanItemType} newState 카테고리 "todo" | "doing" | "done"
   */
  setState(newState) {
    this.kanbanItems = newState;
  }
}