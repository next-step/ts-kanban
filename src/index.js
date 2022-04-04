"use strict";
let todoId = 1;
let kanbanId = 1;
// 스토어
const todoList = [];
const kanbanList = [];
// 카테고리
const category = ["오늘 할 일", "내일 할 일", "다음 주 할 일"];
// 할 일 추가
const createTodo = (todoItem) => {
    todoList.push(todoItem);
    todoId++;
    readTodoList();
};
//전체 할 일 가져오기
const readTodoList = () => {
    console.table(todoList);
};
// 특정 할 일 가져오기
const readTodoDetail = (todoId) => {
    console.table(todoList.find((todo) => todo.todoId === todoId));
};
// 할 일 수정
const updateTodo = (todoId, content, finished, selectedCategory) => {
    const todoItem = todoList.filter((todo) => todo.todoId === todoId);
    if (content) {
        todoItem[0].content = content;
    }
    if (finished) {
        todoItem[0].finished = finished;
    }
    if (selectedCategory) {
        todoItem[0].category = selectedCategory;
    }
    readTodoList();
};
// 특정 할 일의 특정 태그 수정
const updateTodoTag = (todoId, selectedTag, tagValue) => {
    var _a, _b;
    const todoItem = todoList.filter((todo) => todo.todoId === todoId);
    (_a = todoItem[0].tags) === null || _a === void 0 ? void 0 : _a.splice((_b = todoItem[0].tags) === null || _b === void 0 ? void 0 : _b.findIndex((tag) => tag === selectedTag), 1, tagValue);
    readTodoList();
};
// 특정 할 일 제거
const deleteTodoDetail = (todoId) => {
    todoList.splice(todoList.findIndex((todo) => todo.todoId === todoId), 1);
    readTodoList();
};
// 전체 할 일 제거
const deleteTodoList = () => {
    todoList.splice(0);
    readTodoList();
};
// 특정 할 일의 특정 태그 제거
const deleteTodoTag = (todoId, selectedTag) => {
    var _a, _b;
    const todoItem = todoList.filter((todo) => todo.todoId === todoId);
    (_a = todoItem[0].tags) === null || _a === void 0 ? void 0 : _a.splice((_b = todoItem[0].tags) === null || _b === void 0 ? void 0 : _b.findIndex((tag) => tag === selectedTag), 1);
    readTodoList();
};
// 특정 할 일의 모든 태그 제거
const deleteTodoTagAll = (todoId) => {
    var _a;
    const todoItem = todoList.filter((todo) => todo.todoId === todoId);
    (_a = todoItem[0].tags) === null || _a === void 0 ? void 0 : _a.splice(0);
    readTodoList();
};
// 칸반 추가
const createKanban = (kanban) => {
    kanbanList.push(kanban);
    kanbanId++;
    readKanban();
};
// 칸반 가져오기
const readKanban = () => {
    console.table(kanbanList);
};
// 칸반 제목 수정
const updateKanbanTitle = (kanbanId, title) => {
    const kanbanItem = kanbanList.filter((kanban) => kanban.kanbanId === kanbanId);
    kanbanItem[0].title = title;
    readKanban();
};
// 칸반 할 일 이동
const updateKanbanTodo = (kanbanId, targetKanbanId, todoId) => {
    const kanbanItem = kanbanList.filter((kanban) => kanban.kanbanId === kanbanId);
    const targetKanbanItem = kanbanList.filter((kanban) => kanban.kanbanId === targetKanbanId);
    kanbanItem[0].todoList.splice(kanbanItem[0].todoList.findIndex((todo) => todo.todoId === todoId), 1);
    targetKanbanItem[0].todoList.push(todoList.filter((todo) => todo.todoId === todoId)[0]);
    readKanban();
};
// 칸반 제거
const deleteKanban = (kanbanId) => {
    kanbanList.splice(kanbanList.findIndex((kanban) => kanban.kanbanId === kanbanId), 1);
    readKanban();
};
