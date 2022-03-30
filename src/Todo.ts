import { TodoData } from './types.js';
import LabelList from './LabelList.js';

export default class Todo {
  #data: TodoData = {
    id: '',
    isDone: false,
    content: 'default content',
    category: 'default category',
    labelList: new LabelList(),
  };

  constructor(
    content: TodoData['content'],
    category: TodoData['category'],
    labels?: TodoData['labelList']
  ) {}

  get data(): TodoData {}

  setContent(value: TodoData['content']) {}

  setisDone(value: TodoData['isDone']) {}

  setCategory(value: TodoData['category']) {}
}
