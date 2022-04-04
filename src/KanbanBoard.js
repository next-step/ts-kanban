/**
 * @description Board(1)는 Kanban이라 불리는 Todolist(n)와 ArchiveList(1)을 가지는 객체 배열
 * 0번째 원소로 ArchiveList를 가진다.
 * @type {Todolist[]}
 */
const board = [];

/**
 * @function createList
 * @description Todolist 객체를 생성하고 Board에 추가한다.
 * (Todolist에 아이디, 제목을 붙여서 Board에 부착한다)
 * ID를 기반으로 칸반이 가로 정렬된다.
 * @param {!number} id
 * @param {!string} title
 * @param {Todoitem[]} list - required, 초기에 빈 배열을 가진다. createItem으로 추가됨
 * @returns {{Todolist}} 생성된 Todolist를 반환
 */
const createList = (id, title) => {
  const newList = { id: id, title: title, list: [] };
  board.push(newList);
  return newList;
};

/**
 * @function readBoard
 * @description 칸반보드를 조회한다.
 * 칸반보드에 부착된 모든 Todolist를 조회한다.
 * @returns {Kanban}
 */
const readBoard = () => {
  return Object.values(board);
};

/**
 * @function readList
 * @description 특정 Todolist를 조회한다.
 * 해당 ID를 가진 Todolist 인스턴스를 반환한다.
 * @param {!number} id
 * @returns {Todolist}
 */
const readList = (id) => {
  return Object.values(board[id]);
};

/**
 * @function updateList
 * @description Todolist의 제목을 수정할 수 있다.
 * ID는 식별하기 위한 파라미터, title은 변경할 값을 받는다.
 * 수정 성공시 true 반환
 * @param {!number} id
 * @param {!string} title
 * @returns {boolean}
 */
const updateList = (id, title) => {
  board[id].title = title;
};

/**
 * @function moveList
 * @description 칸반의 가로순서를 변경할 수 있다.
 * @param {!number} id - 이동하려는 Todolist의 id
 * @param {!number} to - 목적지 index(몇번째로 옮길지)
 */
const moveList = (id, to) => {
  createList(to, board[id].title);
  board.splice(id, 1);
};

/**
 * @function moveItem
 * @description Todoitem을 from에서 to로 보낸다.
 * @param {!number} id
 * @param {!number} from - 이전 Todolist의 ID
 * @param {!number} to  - 이후 Todolist의 ID
 * @returns {boolean}
 */
const moveItem = (id, from, to) => {
  board[to].list.push(board[from].list[id]);
  board[from].list.splice(id, 1);
};

/**
 * @function deleteList
 * @description 특정 ID를 가진 리스트를 삭제한다.
 * 삭제된 리스트의 기존 할 일은 모두 ArchiveList로 이동한다.
 * @param {!number} id
 * @returns {boolean}
 */
const deleteList = (id) => {
  board.splice(id, 1); //id를 찾아서 제거해야함
};

export {
  board,
  createList,
  readBoard,
  readList,
  updateList,
  moveList,
  moveItem,
  deleteList,
};
