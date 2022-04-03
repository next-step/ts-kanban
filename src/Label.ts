import { LabelData } from './types.js';

export default class Label {
  #data: LabelData = { id: '', content: '' };

  constructor(id: LabelData['id'], content: LabelData['content']) {}

  get data(): LabelData {}

  setContent(value: LabelData['content']) {}
}
