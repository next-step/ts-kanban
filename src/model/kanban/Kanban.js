/**
 * @description
 * Kanban 리스트 생성자입니다.
 * 한번만 생성되어 static으로 반환됩니다.
 */
class Kanbans {
  #kanbans = [];

  /**
   * @description Kanbans을 생성하여 반환합니다.
   * @returns {Kanbans}
   */
  static getInstance() {}

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
   * @return {Array.<Kanban>} Kanban
   */
  addKanban(name) {}

  /**
   * @description
   * 모든 Kanban을 호출합니다.
   * ID 기반으로 정렬되어 호출됩니다.
   * @param {string} name Kanban 제목
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
  updateKanbanOrder(kanbanId, orderNumber) {}

  /**
   * @description
   * kanban을 삭제합니다.
   * @param {string} kanbanI
   * @param {string} newKanbanName
   * @return {Kanban}
   */
  updateKanbanName(kanbanId, newKanbanName) {}

  /**
   * @description
   * 1건의 kanban을 삭제합니다.
   * 삭제되는 Kanban내의 있는 Todos들은 Archive 상태의 Karban으로 이관됩니다.
   * @return {Array.<Todo>}
   * 삭제한 Kanban내의 할일들을 반환합니다.
   */
  deleteKanbanById(kanbanId) {}
}

class Kanban {
  status;
  id;
  name;

  /**
   * @description
   * Karban 생성자입니다.
   * Kabans에서 초기 생성되는 Kaban외에는 모두 Active Status를 가집니다.
   * @constructor
   * @param {string} status kanban 상태
   * @param {string} name kanban 명입니다.
   */
  constructor(status, name) {}
}
