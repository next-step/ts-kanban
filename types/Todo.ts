type Tag = {
  id: string;
  tag: string;
};

type Category = {
  id: string;
  category: string;
};

type Todo = {
  id: string;
  content: string;
  done: boolean;
  categories: Category[];
  tags: Tag[];
};

type TodoList = Todo[];

type CreateTodo = ({
  content,
  categories,
  tags,
}: {
  content: Todo["content"];
  categories: Todo["categories"];
  tags?: Todo["tags"];
}) => void;

type UpdateTodoContent = ({
  id,
  newContent,
}: {
  id: Todo["id"];
  newContent: Todo["content"];
}) => void;

type ToggleTodoDone = ({ id }: { id: Todo["id"] }) => void;

type UpdateCategory = ({
  todoId,
  categoryId,
  newCategory,
}: {
  todoId: Todo["id"];
  categoryId: Category["id"];
  newCategory: Category["category"];
}) => void;

type DeleteCategory = ({
  todoId,
  categoryId,
}: {
  todoId: Todo["id"];
  categoryId: Category["id"];
}) => void;

type DeleteAllCategories = ({ todoId }: { todoId: Todo["id"] }) => void;

type UpdateTag = ({
  todoId,
  tagId,
  newTag,
}: {
  todoId: Todo["id"];
  tagId: Tag["id"];
  newTag: Tag["tag"];
}) => void;

type DeleteTag = ({
  todoId,
  tagId,
}: {
  todoId: Todo["id"];
  tagId: Tag["id"];
}) => void;

type DeleteAllTags = ({ todoId }: { todoId: Todo["id"] }) => void;

type DeleteTodo = ({ id }: { id: Todo["id"] }) => void;

type DeleteAllTodos = () => void;

type findTodoById = (id: string) => Todo;
