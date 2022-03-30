import Label from './Label.js';
import { LabelData } from './types.js';

export default class LabelList {
  #labelList: Label[] = [];

  get data(): Label[] {}

  addLabel(newLabel: Label): boolean {}

  updateLabelContentById(labelId: LabelData['id'], content: LabelData['content']): boolean {}

  deleteLabelById(labelId: LabelData['id']): boolean {}

  deleteAllLabel(): boolean {}
}
