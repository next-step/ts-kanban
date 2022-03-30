import Tag from './Tag';

interface TodoInterface {
  updateTodo(todo: Todo): Todo;
  updateTagByTagId(newTag: Tag): Tag;
}

export default class Todo implements TodoInterface {
  public readonly id: string;
  public content: string;
  public complete: boolean;
  public category?: string;
  public tags: Tag[];

  constructor({ content, complete, category, tags }) {
    this.id = Date.now().toString();
    this.content = content;
    this.complete = complete;
    this.category = category;
    this.tags = tags || [];
  }

  updateTodo(todo: Todo): Todo {
    this.content = todo.content;
    this.complete = todo.complete;
    this.category = todo.category;
    this.tags = todo.tags || [];
    return this;
  }

  updateTagByTagId(newTag: Tag): Tag {
    const tag: Tag = this.tags.find(tag => newTag.id === tag.id);
    tag.name = newTag.name;
    return tag;
  }
}
