import Kanban from "./Kanban";
import TodoItem from "./TodoItem";

interface EditKanbanOptions {
    title: Kanban["title"];
}

export default class App {
    kanbans: Kanban[] = [];
    archiveKanban: Kanban = new Kanban({title: "archive"});

    addKanban(kanban: Kanban) {

    }

    getKanbanById(id: Kanban['id']): Kanban {

    }

    getKanbanAll(): Kanban[] {

    }

    editKanbanOrder(id: Kanban['id'], prevIndex: number, nextIndex: number) {

    }

    editKanbanTitle(id: Kanban['id'], options: EditKanbanOptions) {

    }

    moveTodoItem(todoItemId: TodoItem['id'], prevKanbanId: Kanban['id'], nextKanbanId: Kanban['id']) {

    }

    removeKanbanById(id: Kanban['id']) {
        // 삭제된 칸반의 기존 할 일은 모두 Archive칸반으로 이동한다.
    }
}
