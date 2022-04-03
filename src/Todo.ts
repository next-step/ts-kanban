import { TodoData } from './types.js';
import LabelList from './LabelList.js';
import {uid} from "./utils";

export default class Todo {
  #data: TodoData = { // NOTE: private로 했으면 좋았을 것 같음.
    id: '',
    isDone: false,
    content: 'default content',
    category: 'default category',
    labelList: new LabelList(), // NOTE: contsructor애서 주입받는 형식이 좀 더 좋아보임.
  };

  constructor(
    content: TodoData['content'],
    category: TodoData['category'],
    labels?: TodoData['labelList']
  ) {
    this.data.id = uid();
    this.data.content = content;
    this.data.category  = category;
  }

  get data(): TodoData {
    return this.#data;
  }

  setContent(value: TodoData['content']) {
    this.data.content = value;
  }

  // NOTE: toggle 형식으로 설계하면 더 좋았을 것 같음.
  setisDone(value: TodoData['isDone']) {
    this.data.isDone = value;
  }

  setCategory(value: TodoData['category']) {
    this.data.category = value;
  }
}
