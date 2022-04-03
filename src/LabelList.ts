import Label from './Label.js';
import { LabelData } from './types.js';

export default class LabelList {
  #labelList: Label[] = [];

  get data(): Label[] {
    return this.#labelList;
  }

  addLabel(newLabel: Label): boolean {
    this.#labelList = [...this.#labelList, newLabel];
    return true;
  }

  // NOTE: findByLabelById 메서드도 있으면 좋을 것 같음.
  updateLabelContentById(labelId: LabelData['id'], content: LabelData['content']): boolean {
    const selectedLabel = this.#labelList.find(label => label.data.id === labelId)!;
    selectedLabel.setContent(content);
    return true;
  }

  deleteLabelById(labelId: LabelData['id']): boolean {
    this.#labelList = this.#labelList.filter(label => label.data.id !== labelId);
    return true;
  }

  deleteAllLabel(): boolean {
    this.#labelList = [];
    return true;
  }
}
