import Kanban from './Kanban.js'

const kanbanApp = new Kanban();

kanbanApp.createTodo({content: 'test'});

kanbanApp.readTodos();

const firstItemId = kanbanApp.kanbanItems['todo'][0].id;

kanbanApp.updateTodo('todo', firstItemId, {content: 'abc123', complete: true, tags: ['js', 'ts']});

kanbanApp.readTodo('todo', firstItemId);

kanbanApp.updateCategory('todo', firstItemId, "doing")

kanbanApp.readTodo('doing', firstItemId);

kanbanApp.deleteTag('doing', firstItemId, 'js');

kanbanApp.readTodo('doing', firstItemId);

kanbanApp.deleteTodo('doing', firstItemId);

kanbanApp.readTodos();
