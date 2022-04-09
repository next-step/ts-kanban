
const todos: Todo[] = [];

export const createTodo: CreateTodo = (todoInfo: {
  content: string;
  category: string;
  tags?: string[];
}): Todo => {
  const defaultTodo: Todo = {
    id: Date.now(),
    content: '',
    completed: false,
    category: '',
    tags: [],
  }
  return {...defaultTodo, ...todoInfo};
};

export const getTodos: GetTodos = (): Todo[] => todos;

export const getTodoById: GetTodoById = (id: Todo['id']): Todo => {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) throw new Error("Not Found Todo!");    
  return todo;
};

export const updateContent: UpdateContent = (id: Todo['id'], content: Todo['content']): Todo => {
  const todo = getTodoById(id);
  todo.content = content;
  return todo;
};

export const updateCategory: UpdateCategory = (id: Todo['id'], category: Todo['category']): Todo => {
  const todo = getTodoById(id);
  todo.category = category;
  return todo;
};

export const updateTags: UpdateTags = (id: Todo['id'], tags: Todo['tags']): Todo => {
  const todo = getTodoById(id);
  todo.tags = tags;
  return todo;
};

export const toggleCompleted: ToggleCompleted = (id: Todo['id']): void => {
  const todo = getTodoById(id);
  todo.completed = todo.completed ? false : true;
}

export const deleteTodos: DeleteTodos = (): void => {
  todos.splice(0, todos.length);
};

export const deleteTodoById: DeleteTodoById = (id: Todo['id']): void => {
  const targetIndex = todos.findIndex((todo) => todo.id === id);
  todos.splice(targetIndex, 1);
};

export const deleteTagById: DeleteTagById = (id: Todo['id'], tag: string): void => {
  const todo = getTodoById(id);
  todo.tags = todo.tags?.filter((t) => t !== tag);
};

export const deleteTagsById: DeleteTagsById = (id: Todo['id']): void => {
  const todo = getTodoById(id);
  todo.tags = [];
};

