import TodoItem from "./TodoItem";

export default class TodoList {
    list: TodoItem[] = [];

    addItem(todoItem: TodoItem) {
        this.list.push(todoItem);
    }

    getItemById(id: TodoItem["id"]) {
        return this.list.find((item) => item.id === id);
    }

    getItemAll() {
        return this.list;
    }

    removeItemById(id) {
        this.list = this.list.filter((item) => item.id !== id);
    }

    removeItemAll() {
        this.list = [];
    }
}
