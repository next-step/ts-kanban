import { LabelData } from './types.js';

export default class Label {
  #data: LabelData = { id: '', content: '' };

  constructor(id: LabelData['id'], content: LabelData['content']) {
    this.#data.id = id;
    this.#data.content = content;
  }

  get data(): LabelData {
    return this.#data;
  }

  setContent(value: LabelData['content']) {
    this.#data.content = value;
  }
}
