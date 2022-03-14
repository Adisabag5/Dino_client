import { InteractionsBaseContent } from "./models";

export class UserComment implements InteractionsBaseContent{
    id: number;
    user_id: number;
    username: string;
    content: string;
    date: string;
    post_id: number;

    constructor(id?: number, user_id?: number, username?:string, content?: string, date?: string, post_id?: number) {
        this.id = id? id : 0;
        this.user_id =  user_id? user_id : 0;
        this.username =  username? username : '';
        this.content =  content? content : '';
        this.date =  date? date : '';
        this.post_id = post_id? post_id : 0;
    }
}