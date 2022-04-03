import TodoItem from "./TodoItem";

interface EditItemOptions {
    content?: TodoItem["content"];
    category?: TodoItem["category"];
    isFinished?: TodoItem["isFinished"];
    tags?: TodoItem["tags"];
}

export default class TodoList {
    list: TodoItem[] = [];

    addItem(todoItem: TodoItem) {

    }

    getItemById(id: TodoItem["id"]): TodoItem {

    }

    getItemAll(): TodoItem[] {

    }

    editItemById(id: TodoItem["id"], options: EditItemOptions) {

    }

    removeItemById(id: TodoItem["id"]) {

    }

    removeItemAll() {

    }
}
