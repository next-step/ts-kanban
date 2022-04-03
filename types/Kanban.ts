type Kanban = {
  id: string;
  title: string;
  todoList: TodoList;
};

type KanbanList = Kanban[] & {
  id: "-1";
  title: "Archive";
  todoList: TodoList;
};

type createKanban = ({ title }: { title: string }) => void;

type sortKanbanById = () => void;

type swapKanban = ({
  fromKanbanId,
  toKanbanId,
}: {
  fromKanbanId: string;
  toKanbanId: string;
}) => void;

type updateKanbanTitle = ({
  id,
  newTitle,
}: {
  id: Kanban["id"];
  newTitle: string;
}) => void;

type moveTodoToOtherKanban = ({
  targetKanbanId,
  todoId,
}: {
  targetKanbanId: Kanban["id"];
  todoId: Todo["id"];
}) => void;

type deleteKanban = ({ id }: { id: Kanban["id"] }) => void;
