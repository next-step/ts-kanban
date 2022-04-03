type TagId = number

let tagId: TagId = 0;

export default class Tag {
    readonly id: TagId;
    content: string;

    constructor(content: string) {
        this.id = tagId++;
        this.content = content;
    }
}
