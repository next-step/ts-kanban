
const kanbans: Kanban[] = [];

export const createKanban: CreateKanban = (title: Kanban['title']): Kanban => {
  return {
    id: Date.now(),
    order: kanbans.map((kanban) => kanban.order).reduce((order1, order2) => Math.max(order1, order2), 0) + 1,
    title: title,
    todos: [],
  };
};

export const getKanbans: GetKanbans = (): Kanban[] => kanbans;

export const updateKanbanOrder: UpdateKanbanOrder = (id: Kanban['id'], order: number): void => {
  const kanban = kanbans.find((kanban) => kanban.id === id);
  if (!kanban) throw new Error("Not Found Kanban!");
  kanban.order = order;
};

export const updateKanbanTitle: UpdateKanbanTitle = (id: Kanban['id'], title: Kanban['title']): void => {
  const kanban = kanbans.find((kanban) => kanban.id === id);
  if (!kanban) throw new Error("Not Found Kanban!");
  kanban.title = title;
};

export const updateKanbanTodo: UpdateKanbanTodo = (updateInfo: {
  baseId: Kanban['id'];
  targetId: Kanban['id'];
  todo: Todo;
}): void => {
  const baseKanban = kanbans.find((kanban) => kanban.id === updateInfo.baseId);
  if (!baseKanban) throw new Error("Not Found Kanban!");

  const targetKanban = kanbans.find((kanban) => kanban.id === updateInfo.targetId);
  if (!targetKanban) throw new Error("Not Found Kanban!");

  const baseTodoTargetIndex = baseKanban.todos.findIndex((todo) => todo.id === updateInfo.todo.id);
  baseKanban.todos.splice(baseTodoTargetIndex, 1);

  targetKanban.todos.push(updateInfo.todo);
};

export const deleteKanbanById: DeleteKanbanById = (id: Kanban['id']): void => {
  const targetIndex = kanbans.findIndex((kanban) => kanban.id === id);
  kanbans.splice(targetIndex, 1);
};

