/**
 * @function createItem
 * @description 할 일을 추가할 수 있다. 내용없이 추가할 수 없다.
 * Todoitem 객체를 생성한다.
 * @param {!number} id 
 * @param {!string} content
 * @param {!boolean} completed
 * @param {!string} category
 * @param {?string[]} tags
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

  // Todolist.push(newItem); // 특정 id의 Todolist에 추가하도록 변경해야함
  return newItem;
};

/**
 * @function readItem
 * @description ID를 기반으로 특정 할 일을 조회할 수 있다.
 * 해당 ID를 가진 Todoitem 인스턴스를 반환한다.
 * @param {!number} id
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
 * @param {!number} id
 * @param {!string} content 
 * @param {!boolean} completed
 * @param {!string} category
 * @param {?string[]} tags
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
 * @param {!number} id 
 * @param {!string} prev  - 수정하려는 태그
 * @param {!string} next  - 수정할 내용
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
 * @param {!number} id
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
 * @param {!number} id 
 * @param {!string} tag
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
 * @param {!number} id
 * @returns {boolean}
 */
const deleteTags = (id) => {
  const targetItemIdx = Todolist.findIndex((item) => item.id === id);
  if (targetItemIdx === -1) return false;

  Todolist[targetItemIdx].tags = [];
  return true;
};

export { createItem, readItem, updateItem, updateTag, deleteItem, deleteItems, deleteTag, deleteTags}