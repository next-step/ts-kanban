import TodoList from "./TodoList";

type KanbanId = number;

interface CreateKanbanParam {
    title: Kanban["title"];
}

interface UpdateKanbanParam {
    title: Kanban["title"];
}

let kanbanId: KanbanId = 0;

export default class Kanban {
    readonly todoList: TodoList;
    readonly id: KanbanId;
    title: string;

    constructor({title}: CreateKanbanParam) {
        this.id = kanbanId++;
        this.todoList = new TodoList();
        this.title = title;
    }

    updateKanban({title}: UpdateKanbanParam) {
        if (title) this.title = title;
    }
}
