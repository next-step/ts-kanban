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
const createTodo = (todoItem: TodoItem): void => {
  todoList.push(todoItem);
  todoId++;
  readTodoList();
};

//전체 할 일 가져오기
const readTodoList = (): void => {
  console.table(todoList);
};

// 특정 할 일 가져오기
const readTodoDetail = (todoId: number): void => {
  console.table(todoList.find((todo: TodoItem) => todo.todoId === todoId));
};

// 할 일 수정
const updateTodo = (
  todoId: number,
  content: string,
  finished: boolean,
  selectedCategory: "오늘 할 일" | "내일 할 일" | "다음 주 할 일"
): void => {
  const todoItem: TodoItem[] = todoList.filter(
    (todo: TodoItem) => todo.todoId === todoId
  );
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
const updateTodoTag = (
  todoId: number,
  selectedTag: Tag,
  tagValue: Tag
): void => {
  const todoItem: TodoItem[] = todoList.filter(
    (todo: TodoItem) => todo.todoId === todoId
  );
  todoItem[0].tags?.splice(
    todoItem[0].tags?.findIndex((tag: Tag) => tag === selectedTag),
    1,
    tagValue
  );
  readTodoList();
};

// 특정 할 일 제거
const deleteTodoDetail = (todoId: number): void => {
  todoList.splice(
    todoList.findIndex((todo: TodoItem) => todo.todoId === todoId),
    1
  );
  readTodoList();
};

// 전체 할 일 제거
const deleteTodoList = (): void => {
  todoList.splice(0);
  readTodoList();
};

// 특정 할 일의 특정 태그 제거
const deleteTodoTag = (todoId: number, selectedTag: Tag): void => {
  const todoItem: TodoItem[] = todoList.filter(
    (todo: TodoItem) => todo.todoId === todoId
  );
  todoItem[0].tags?.splice(
    todoItem[0].tags?.findIndex((tag: Tag) => tag === selectedTag),
    1
  );
  readTodoList();
};

// 특정 할 일의 모든 태그 제거
const deleteTodoTagAll = (todoId: number): void => {
  const todoItem: TodoItem[] = todoList.filter(
    (todo: TodoItem) => todo.todoId === todoId
  );
  todoItem[0].tags?.splice(0);
  readTodoList();
};

// 칸반 추가
const createKanban = (kanban: Kanban): void => {
  kanbanList.push(kanban);
  kanbanId++;
  readKanban();
};

// 칸반 가져오기
const readKanban = (): void => {
  console.table(kanbanList);
};

// 칸반 제목 수정
const updateKanbanTitle = (kanbanId: number, title: string): void => {
  const kanbanItem: Kanban[] = kanbanList.filter(
    (kanban: Kanban) => kanban.kanbanId === kanbanId
  );

  kanbanItem[0].title = title;
  readKanban();
};

// 칸반 할 일 이동
const updateKanbanTodo = (
  kanbanId: number,
  targetKanbanId: number,
  todoId: number
): void => {
  const kanbanItem: Kanban[] = kanbanList.filter(
    (kanban: Kanban) => kanban.kanbanId === kanbanId
  );
  const targetKanbanItem: Kanban[] = kanbanList.filter(
    (kanban: Kanban) => kanban.kanbanId === targetKanbanId
  );
  kanbanItem[0].todoList.splice(
    kanbanItem[0].todoList.findIndex(
      (todo: TodoItem) => todo.todoId === todoId
    ),
    1
  );
  targetKanbanItem[0].todoList.push(
    todoList.filter((todo: TodoItem) => todo.todoId === todoId)[0]
  );
  readKanban();
};

// 칸반 제거
const deleteKanban = (kanbanId: number): void => {
  kanbanList.splice(
    kanbanList.findIndex((kanban: Kanban) => kanban.kanbanId === kanbanId),
    1
  );
  readKanban();
};
