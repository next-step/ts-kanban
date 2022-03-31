type TodoItem = {
  id: number;
  content: string;
  finished: boolean;
  category: string;
  tags?: Array<string>;
};

// 스토어
const todoList: Array<TodoItem> = [];

// 카테고리
const category: Array<string> = ["오늘 할 일", "내일 할 일", "다음 주 할 일"];

// 입력 받은 아이디
let id: number;
// 입력 받은 할 일
let content: string;
// 입력 받은 완료 여부
let finished: boolean;
// 선택된 카테고리
let selectedCategory: string;
// 입력 받은 태그 리스트
let tags: Array<string>;
// 수정 대상 태그
let selectedTag: string;
// 새로 입력되는 태그 값
let tagValue: string;

// 할 일 추가
const createTodo = (
  id: number,
  content: string,
  finished: boolean = false,
  selectedCategory: string,
  tags?: Array<string>
) => {};

//전체 할 일 가져오기
const readTodoList = () => {};

// 특정 할 일 가져오기
const readTodoDetail = (id: number) => {};

// 할 일 수정
const updateTodo = (
  id: number,
  content: string,
  finished: boolean,
  selectedCategory: string
) => {};

// 특정 할 일의 특정 태그 수정
const updateTodoTag = (id: number, selectedTag: string, tagValue: string) => {};

// 특정 할 일 제거
const deleteTodoDetail = (id: number) => {};

// 전체 할 일 제거
const deleteTodoList = () => {};

// 특정 할 일의 특정 태그 제거
const deleteTodoTag = (id: number, selectedTag: string) => {};

// 특정 할 일의 모든 태그 제거
const deleteTodoTagAll = (id: number) => {};
