export default class Tag {
  public readonly id: string;
  public name: string;

  constructor({ name }) {
    this.id = Date.now().toString();
    this.name = name;
  }
}
