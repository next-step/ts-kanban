/**
 * @file 타입 재정의 파일
 * @author tiaz0128(주환석)
 */

/** 
 * @typedef {object} InitTodoItemType TodoItem
  * @property {string} id 아이디값
  * @property {string} category 카테고리
  * @property {string} content 내용
  * @property {boolean} [complete] 완료여부
  * @property {string[]} [tags] 태그들
*/

/**
 * @typedef  {"todo" | "doing" | "done"} TodoCategory 
 */

/**
 * @typedef {object} KanbanItemType
 *  @property {TodoItemType[]} todo
 *  @property {TodoItemType[]} doing
 *  @property {TodoItemType[]} done
 */

/**
 * @typedef {class} KanbanType TodoItem 을 Map 형태로 관리하는 클래스
 * 
  * @property {KanbanItemType[]} kanbanItems 카테고리 별 todoList
  * 
  * @property {function} getUniqueId 유니크한 id 값 문자열을 리턴
  * @property {function} createTodo todoitem 생성
  * @property {function} readTodos 모든 todoitem 출력
  * @property {function} readTodo id 값에 해당하는 todoitem 출력
  * @property {function} updateTodo id 값에 해당하는 todoitem 업데이트
  * @property {function} updateTag id 값에 해당하는 todoitem 의 category 업데이트
  * @property {function} deleteTodo id 값에 해당하는 todoitem 삭제
  * @property {function} deleteTag id 값에 해당하는 todoitem 에서 해당하는 tag 삭제
 * 
 */