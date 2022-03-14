import { UserComment } from "./comment";
import { InteractionsBaseContent } from "./models";

export class Post implements InteractionsBaseContent {
    id: number;
    user_id: number;
    username: string;
    content: string;
    date: string;
    comments: UserComment[];

    constructor(id?: number, user_id?: number, username?:string, content?: string, date?: string, comments?: UserComment[]) {
        this.id = id? id : 0;
        this.user_id =  user_id? user_id : 0;
        this.username =  username? username : '';
        this.content =  content? content : '';
        this.date =  date? date : '';
        this.comments =  comments? comments : [new UserComment()];
    }
}