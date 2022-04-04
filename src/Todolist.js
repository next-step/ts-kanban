/**
 * @description Kanban(todolist)는 Todoitem를 가지는 객체
 * @type {{id: !string, title: !string, Todoitems: Todoitem[]}}
 */
const Todolist = {};

/**
 * @description Todoitem 객체
 * 순서대로 아이디, 내용, 완료여부, 카테고리, 태그들(문자열 타입의 태그를 담은 문자열 배열)
 * @type {{id: !string, content: !string, completed: !boolean, category: !string, tags: ?string[]}}
 */
const Todoitem = {};

/**
 * @function createItem
 * @description 할 일을 추가할 수 있다. 내용없이 추가할 수 없다.
 * Todoitem 객체를 생성한다.
 * @param id {string} - required
 * @param content {string} - required
 * @param completed {boolean} - required
 * @param category {string} - required
 * @param tags {?string[]} - optional
 * @returns {{}}
 */
const createItem = (id, content, completed, category, tags) => {
  if (!content) return {};
  const newItem = {
    id,
    content,
    completed,
    category,
    tags: tags?.length ? tags : undefined,
  };

  Todolist.push(newItem); // 특정 id의 Todolist에 추가하도록 변경해야함
  return newItem;
};

// readList와 중복됨
/**
 * @function readItems
 * @description 모든 할 일을 조회할 수 있다.
 * Todolist를 반환한다.
 * @returns {Todoitem[]}
 */
const readItems = () => {
  return Todolist;
};

/**
 * @function readItem
 * @description ID를 기반으로 특정 할 일을 조회할 수 있다.
 * 해당 ID를 가진 Todoitem 인스턴스를 반환한다.
 * @param id
 * @returns {{}}
 */
const readItem = (id) => {
  const targetItem = Todolist.find((item) => item.id === id);
  return targetItem ? targetItem : {};
};

/**
 * @function updateItem
 * @description ID를 제외한 모든 속성을 수정할 수 있다.
 * ID는 식별하기 위한 파라미터, 나머지는 변경할 값을 받는다.
 * 수정 성공시 true 반환
 * null 입력시 해당 속성은 수정하지 않음
 * @param id {string} - required
 * @param content {string} - required
 * @param completed {boolean} - required
 * @param category {string} - required
 * @param tags {string[]} - optional
 * @returns {boolean}
 */
const updateItem = (id, content, completed, category, tags) => {
  const targetItemIdx = Todolist.findIndex((item) => item.id === id);
  if (targetItemIdx === -1) return false;

  Todolist[targetItemIdx] = {
    ...Todolist[targetItemIdx],
    content,
    completed,
    category,
    tags: tags.length ? tags : undefined,
  };
  return true;
};

/**
 * @function updateTag
 * @description 특정 할 일의 특정 태그를 수정할 수 있다.
 * 수정 성공시 true 반환
 * @param id {string}
 * @param prev {string} - 수정하려는 태그
 * @param next {string} - 수정할 내용
 * @returns {boolean}
 */
const updateTag = (id, prev, next) => {
  const targetItemIdx = Todolist.findIndex((item) => item.id === id);
  if (targetItemIdx === -1) return false;

  const targetTagIdx = Todolist[targetItemIdx].tags.findIndex(
    (tag) => tag === prev
  );
  if (targetTagIdx === -1) return false;
  Todolist[targetItemIdx].tags[targetTagIdx] = next;

  return true;
};

/**
 * @function deleteItem
 * @description ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 삭제 성공시 true 반환
 * @param id
 * @returns {boolean}
 */
const deleteItem = (id) => {
  const targetItemIdx = Todolist.findIndex((item) => item.id === id);
  if (targetItemIdx === -1) return false;

  Todolist.splice(targetItemIdx, 1);
  return true;
};

/**
 * @function deleteItems
 * @description 모든 할 일을 제거할 수 있다.
 * 모든 할 일이 제거되더라도 기존 칸반이 제거되지는 않는다.
 * @returns {boolean}
 */
const deleteItems = () => {
  Todolist = [];
  return true;
};

/**
 * @function deleteTag
 * @description 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @param id
 * @param tag
 * @returns {boolean}
 */
const deleteTag = (id, tag) => {
  const targetItemIdx = Todolist.findIndex((item) => item.id === id);
  if (targetItemIdx === -1) return false;

  const targetTagIdx = Todolist[targetItemIdx].tags.findIndex(
    (eachTag) => eachTag === tag
  );
  if (targetTagIdx === -1) return false;
  Todolist[targetItemIdx].tags.splice(targetTagIdx, 1);

  return true;
};

/**
 * @function deleteTags
 * @description 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param id
 * @returns {boolean}
 */
const deleteTags = (id) => {
  const targetItemIdx = Todolist.findIndex((item) => item.id === id);
  if (targetItemIdx === -1) return false;

  Todolist[targetItemIdx].tags = [];
  return true;
};

// 테스트
const item1 = {
  id: 1,
  content: "hello world",
  completed: false,
  category: "우선 순위1",
};
const item2 = {
  id: 2,
  content: "hi world",
  completed: false,
  category: "우선 순위2",
  tags: ["하이"],
};
const item3 = {
  id: 3,
  content: "annyeong world",
  completed: false,
  category: "우선 순위3",
  tags: ["긴급", "일반"],
};

[item1, item2, item3].forEach((item) =>
  createItem(item.id, item.content, item.completed, item.category, item.tags)
);
console.log("===== createItem =====");
console.log(Todolist);
console.log("===== readItems =====");
console.log(readItems());
console.log("===== updateItem =====");
console.log(updateItem(2, "ohayo world", true, "우선 순위1", []));
console.log("===== readItem =====");
console.log(readItem(2));
console.log("===== deleteItem =====");
console.log(deleteItem(2));
console.log(readItems());
console.log("===== updateTag =====");
console.log(updateTag(3, "긴급", "안긴급"));
console.log(readItem(3));
console.log("===== deleteTag =====");
console.log(deleteTag(3, "안긴급"));
console.log(readItem(3));
console.log("===== deleteTags =====");
console.log(deleteTags(3));
console.log(readItem(3));

