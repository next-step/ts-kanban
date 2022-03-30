/**
 * @description Kanban은 Todolist를 가지는 객체
 * 순서대로 아이디, 주제, 설명, todolist
 * @type {{id: !string, subject: !string, desc: !string, list: Todolist}}
 */
const Kanban = {};

/**
 * @function createList
 * @description Todolist 객체를 생성하고 Kanban에 추가한다.
 * (Todolist에 아이디, 주제, 설명을 붙여서 Kanban에 등록한다)
 * @param id {string} - required
 * @param subject {string} - required
 * @param desc {string | null} - optional
 * @param list {Todolist[]} - required
 * @returns {{}} 생성된 Todolist를 반환
 */
const createList = (id, content, completed, category, tags) => {
};

/**
 * @function readKanban
 * @description 칸반을 조회한다.
 * @returns {Kanban}
 */
const readLists = () => {
}

/**
 * @function readList
 * @description 특정 Todolist를 조회한다.
 * 해당 ID를 가진 Todolist 인스턴스를 반환한다.
 * @param id
 * @returns {Todolist}
 */
const readList = (id) => {
}

/**
 * @function updateList
 * @description ID, Todolist를 제외한 속성을 수정할 수 있다. (주제, 설명)
 * ID는 식별하기 위한 파라미터, title과 desc는 변경할 값을 받는다.
 * null 입력시 해당 속성은 수정하지 않음
 * 수정 성공시 true 반환
 * @param id {string} - required
 * @param title {string | null} - optional
 * @param completed {boolean | null} - optional
 * @returns {boolean}
 */
const updateList = (id, title, desc) => {
}

/**
 * @function deleteKanban
 * @description 칸반을 삭제한다.
 * @return {boolean}
 */
const deleteKanban = () => {

}

/**
 * @function deleteList
 * @description 특정 ID를 가진 리스트를 삭제한다.
 * @param id
 * @returns {boolean}
 */
const deleteList = (id) => {

}