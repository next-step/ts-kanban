import * as Todo from "./Todolist.js";
import * as Kanban from "./KanbanBoard.js";

// 보드에 기본으로 존재하는 ArchiveList 생성
Kanban.createList(0, "ArchiveList");
console.log(Kanban.board);

// ArchiveList에 할일 추가
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

[item1, item2, item3].forEach((item) => {
  Todo.createItem(
    item.id,
    item.content,
    item.completed,
    item.category,
    item.tags
  );
  Kanban.board[0].list.push(item);
});
console.log("===== createItem =====");

console.log("===== readBoard =====");
console.log(Kanban.readBoard());

console.log("===== readList(0) =====");
console.log(Kanban.readList(0));

// 보드에 'ShoppingList' 생성
Kanban.createList(1, "ShoppingList");
console.log("===== readBoard =====");
console.log(Kanban.board);

// 'ShoppingList'에 Todoitem 추가
const item = Todo.createItem("0", "생수 사기", "false", "생존템", [
  "물",
  "냉장고",
]);
Kanban.board[1].list.push(item);
console.log("===== readList(1) =====");
console.log(Kanban.readList(1));

// 'ShoppingList'의 제목을 수정하기
Kanban.updateList(1, "장보기");
console.log("===== readBoard =====");
console.log(Kanban.board);
console.log("===== readList(1) =====");
console.log(Kanban.readList(1));

console.log("===== moveItem(0,1,0) =====");
Kanban.moveItem(0, 1, 0);
console.log("===== readBoard =====");
console.log(Kanban.board);
console.log("===== readList(0) =====");
console.log(Kanban.readList(0));
console.log("===== readList(1) =====");
console.log(Kanban.readList(1));

// console.log("===== moveList(1,2) =====");
// Kanban.moveList(1, 2);
// console.log("===== readBoard =====");
// console.log(Kanban.board);

console.log("===== deleteList(1) =====");
Kanban.deleteList(1);
console.log("===== readBoard =====");
console.log(Kanban.board);

// console.log("===== updateItem =====");
// console.log(updateItem(2, "ohayo world", true, "우선 순위1", []));
// console.log("===== readItem =====");
// console.log(readItem(2));
// console.log("===== deleteItem =====");
// console.log(deleteItem(2));
// console.log(readItems());
// console.log("===== updateTag =====");
// console.log(updateTag(3, "긴급", "안긴급"));
// console.log(readItem(3));
// console.log("===== deleteTag =====");
// console.log(deleteTag(3, "안긴급"));
// console.log(readItem(3));
// console.log("===== deleteTags =====");
// console.log(deleteTags(3));
// console.log(readItem(3));
