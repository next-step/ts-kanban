let todoId: number = 1;
let kanbanId: number = 1;

type Tag = {
  tag: string;
};

type TodoItem = {
  todoId: number;
  content: string;
  finished: boolean;
  category: "오늘 할 일" | "내일 할 일" | "다음 주 할 일";
  tags?: Tag[];
};

type Kanban = {
  kanbanId: number;
  title: string;
  todoList: TodoItem[];
};

// 스토어
const todoList: TodoItem[] = [];
const kanbanList: Kanban[] = [];

// 카테고리
const category: string[] = ["오늘 할 일", "내일 할 일", "다음 주 할 일"];

// 할 일 추가
const createTodo = (todoItem: TodoItem): void => {};

//전체 할 일 가져오기
const readTodoList = (): void => {};

// 특정 할 일 가져오기
const readTodoDetail = (todoId: number): void => {};

// 할 일 수정
const updateTodo = (
  todoId: number,
  content: string,
  finished: boolean,
  selectedCategory: "오늘 할 일" | "내일 할 일" | "다음 주 할 일"
): void => {};

// 특정 할 일의 특정 태그 수정
const updateTodoTag = (
  todoId: number,
  selectedTag: Tag,
  tagValue: Tag
): void => {};

// 특정 할 일 제거
const deleteTodoDetail = (todoId: number): void => {};

// 전체 할 일 제거
const deleteTodoList = (): void => {};

// 특정 할 일의 특정 태그 제거
const deleteTodoTag = (todoId: number, selectedTag: Tag): void => {};

// 특정 할 일의 모든 태그 제거
const deleteTodoTagAll = (todoId: number): void => {};

// 칸반 추가
const createKanban = (kanban: Kanban): void => {};

// 칸반 가져오기
const readKanban = (): void => {};

// 칸반 제목 수정
const updateKanbanTitle = (kanbanId: number, title: string): void => {};

// 칸반 할 일 이동
const updateKanbanTodo = (
  kanbanId: number,
  targetKanbanId: number,
  todoId: number
): void => {};

// 칸반 제거
const deleteKanban = (kanbanId: number): void => {};
