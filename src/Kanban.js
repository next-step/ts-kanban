/**
 * @file TodoItem 클래스 파일
 * @author tiaz0128(주환석)
 */

/**
 * Kanban 클래스
 * @class
 * @constructor
 * @public
 */
 class Kanban {
  /** @member {KanbanItemType[]} */
  kanbanItems

  /**
   * @constructs
   */
  constructor(){

  }

  /** 
   * 유니크한 id 값 문자열을 리턴
   * @param {void}
   * @returns {string}
   */
  getUniqueId() {
    
  }

  /** 
   * 카테고리에 todoItem 생성
   * @param {InitTodoItemType} initTodoItem content 는 필수. 나머지는 옵션널, 기본값을 세팅
   * @returns {string}
   * @todo category 를 기본값 "todo"로 todoitem 생성
   */
  createTodo(initTodoItem) {
    
  }

  /** 
   * id 값에 해당하는 todoitem 출력
   * @param {string} id todoitem의 아이디값
   * @returns {void}
   */
  readTodo(id) {
    
  }


  /** 
   * 유니크한 id 값 문자열을 리턴
   * @param {TodoCategory} [category] "todo" | "doing" | "done"
   * @returns {void}
   * @todo 1. category 파라미터가 없는 경우 -> 모든 카테고리 todo 출력
   * @todo 2. category 파라미터가 있는 경우 -> 해당 카테고리 todo 만 출력
   */
  readTodos(category) {
    
  }

  /** 
   * id 값에 해당하는 todoitem 업데이트
   * @param {string} id  todoitem의 아이디값
   * @param {InitTodoItemType} newState content 는 필수. 나머지는 옵션널
   * @returns {void}
   */
  updateTodo(id, newState) {
    
  }

  /** 
   * id 값에 해당하는 todoitem 의 category 업데이트
   * @param {string} id  todoitem의 아이디값
   * @param {TodoCategory} newState "todo" | "doing" | "done"
   * @returns {void}
   */
   updateCategory(id, newState) {
    
  }

  /** 
   * id 값에 해당하는 todoitem 에서 해당하는 태그 삭제
   * @param {string} id todoitem의 아이디값
   * @param {string} tagName 태그 이름
   * @returns {void}
   */
   deleteTag(id, tagName) {
    
  }

  /** 
   * id 값에 해당하는 todoitem 삭제
   * @param {string} id todoitem의 아이디값
   * @returns {void}
   */
   deleteTodo(id) {
    
  }
}