import * as Todo from "./Todolist.js";
import * as Kanban from "./KanbanBoard";

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
