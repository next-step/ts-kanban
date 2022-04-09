/**
 * @file TodoItem 클래스 파일
 * @author tiaz0128(주환석)
 */

/**
 * TodoItem 클래스
 * @class
 * @constructor
 * @public
 */
export default class TodoItem implements TodoItemType {
  /** @member {string} */
  id: TodoType["id"];

  /** @member {string} */
  content: TodoType["content"];

  /**
   * @member {boolean}
   * @default false
   * */
  complete: TodoType["complete"];

  /**
   * @member {string[]}
   * @default [ ]
   * */
  tags: TodoType["tags"];

  /**
   * @constructs
   * @param {InitTodoItemType} initState 할 일의 내용
   * @todo TodoItemType 을 보고 필요한 속성값으로 생성자를 정의
   *
   * @see {@link InitTodoItemType} 참고
   */
  constructor(initState: InitTodoItemType & { id: TodoItemType["id"] }) {
    const { id, content, complete, tags } = initState;
    if (!id) throw new Error("Error : empty id");
    if (!content) throw new Error("Error : empty content");

    this.id = id;
    this.content = content;
    this.complete = complete || false;
    this.tags = tags || [];
  }

  /**
   * 콘솔에 TodoItem 의 정보를 출력한다.
   * @param {void}
   * @returns {void}
   * @todo  콘솔에 TodoItem 의 정보를 출력한다.
   */
  printTodo() {
    console.log(
      `${this.complete ? "✅" : "🔲"} ${this.id} : ${
        this.content
      } / ${this.tags.join(", ")}`
    );
  }
}
