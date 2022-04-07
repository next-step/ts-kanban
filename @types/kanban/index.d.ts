type TodoType = {
  id: string;
  content: string;
  complete: boolean;
  tag: string;
  tags: TodoType["tag"][];
};

declare type TodoCategory = "todo" | "doing" | "done";

declare interface TodoItemType {
  id: TodoType["id"];
  content: TodoType["content"];
  complete: TodoType["complete"];
  tags: TodoType["tags"];

  printTodo: () => void;
}

declare type InitTodoItemType = {
  content: TodoType["content"];
  complete?: TodoType["complete"];
  tags?: TodoType["tags"];
};

declare type KanbanItemType = {
  [key in TodoCategory]: TodoItemType[];
};

declare interface KanbanType {
  kanbanItems: KanbanItemType;

  getUniqueId: () => string;
  createTodo: (initTodoItem: InitTodoItemType) => void;
  readTodo: (category: TodoCategory, id: TodoType["id"]) => void;
  readTodos: (category?: TodoCategory) => void;
  updateTodo: (
    category: TodoCategory,
    id: TodoType["id"],
    updatedTodo: Partial<Omit<TodoItemType, "id" | "printTodo">>
  ) => void;
  updateCategory: (
    prevCategory: TodoCategory,
    id: TodoType["id"],
    nextCategory: TodoCategory
  ) => void;
  deleteTodo: (category: TodoCategory, id: TodoType["id"]) => void;
  deleteTag: (
    category: TodoCategory,
    id: TodoType["id"],
    tagName: TodoType["tag"]
  ) => void;
}
