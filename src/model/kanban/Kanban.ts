/**
 * @description
 * Kanban 리스트 생성자입니다.
 * 한번만 생성되어 static으로 반환됩니다.
 */
class KanbanBoard {
  public readonly KanbanBoard: Kanban[] = [];
  private static instance: KanbanBoard;

  /**
   * @description 내부에 선언된 instance를 반환합니다. 존재하지 않는다면, KanbanBoard을 생성하여 반환합니다.
   * @returns {KanbanBoard}
   */
  static getInstance(): KanbanBoard {}

  /**
   * @description
   * Kanban 리스트 인스턴스 생성자입니다.
   * 내부에서 Archive 타입을 가지고 있는 Kaban과 함깨 생성됩니다.
   * @constructor
   */
  constructor() {}

  /**
   * @description
   * Kanban을 추가합니다.
   * Kanban ID는 내부에서 생성됩니다.
   * @param name Kanban 제목
   * @return {Kanban} Kanban
   */
  addKanban(name: string) {}

  /**
   * @description
   * 모든 Kanban을 호출합니다.
   * ID 기반으로 정렬되어 호출됩니다.
   * @return {Array.<Kanban>} Kanban
   */
  findAllKanban() {}

  /**
   * @description
   * kanban의 순서를 변경합니다.
   * @param {string} kanbanId
   * @param {number} orderNumber
   * @return {<Array>.Kanban}
   */
  updateKanbanOrder(kanbanId: string, orderNumber: number) {}

  /**
   * @description
   * kanban을 수정합니다.
   * @param {string} kanbanId - 수정 대상 Kanban ID
   * @param {string} newKanbanName - 수정된 Kanban 명
   * @return {Kanban}
   */
  updateKanbanName(kanbanId: string, newKanbanName: string) {}

  /**
   * @description
   * 칸반이 가지고 있는 할 일 1개를 다른 칸반으로 옮길 수 있습니다.
   * @param {string} originalKanbanId
   * @param {string} newKanbanId
   * @param {string} todoId
   */
  moveOneTodoToAnotherKanban(
    originalKanbanId: string,
    newKanbanId: string,
    todoId: string
  ) {}

  /**
   * @description
   * 1건의 kanban을 삭제합니다.
   * 삭제되는 Kanban내의 있는 Todos들은 Archive 상태의 Karban으로 이관됩니다.
   * @return {Array.<Todo>}
   * 삭제한 Kanban내의 할일들을 반환합니다.
   */
  deleteKanbanById(kanbanId) {}
}

enum KanbanBoardStatus {
  Archive,
  Active,
}

class Kanban {
  public readonly status: KanbanBoardStatus;
  public readonly id: string;
  public name: string;

  /**
   * @description
   * Karban 생성자입니다.
   * Kabans에서 초기 생성되는 Kaban외에는 모두 Active Status를 가집니다.
   * @constructor
   * @param {KanbanBoardStatus} status kanban 상태
   * @param {string} name kanban 명입니다.
   */
  constructor(
    status: KanbanBoardStatus = KanbanBoardStatus.Active,
    name: string
  ) {}
}
