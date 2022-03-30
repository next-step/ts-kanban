import TodoList from "./TodoList";

type KanbanId = number;

interface CreateKanbanParam {
    title: string;
}

interface UpdateKanbanParam {
    id: KanbanId;
    title: string;
}

let kanbanId: KanbanId = 0;

export class Kanban {
    readonly todoList: TodoList;
    id: KanbanId;
    title: string;

    constructor({title}: CreateKanbanParam) {
        this.id = kanbanId++;
        this.todoList = new TodoList();
        this.title = title;
    }

    updateKanban({id, title}: UpdateKanbanParam) {
        if (id) this.id = id
        if (title) this.title = title;
    }
}
