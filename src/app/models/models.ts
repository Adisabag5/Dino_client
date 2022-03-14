
export interface UploadContent {
    content: string;
    date: string;
    user_id: number;
    post_id?: number;
}

// Interactions = posts & comments
export interface InteractionsBaseContent {
    id: number;
    user_id: number;
    username: string;
    content: string;
    date: string;
}


// export class Post implements InteractionsBaseContent {
//     id: number;
//     user_id: number;
//     username: string;
//     content: string;
//     date: string;
//     comments: UserComment[];

//     constructor(id?: number, user_id?: number, username?:string, content?: string, date?: string, comments?: UserComment[]) {
//         this.id = id? id : 0;
//         this.user_id =  user_id? user_id : 0;
//         this.username =  username? username : '';
//         this.content =  content? content : '';
//         this.date =  date? date : '';
//         this.comments =  comments? comments : [new UserComment()];
//     }
// }

// export class UserComment implements InteractionsBaseContent{
//     id: number;
//     user_id: number;
//     username: string;
//     content: string;
//     date: string;
//     post_id: number;

//     constructor(id?: number, user_id?: number, username?:string, content?: string, date?: string, post_id?: number) {
//         this.id = id? id : 0;
//         this.user_id =  user_id? user_id : 0;
//         this.username =  username? username : '';
//         this.content =  content? content : '';
//         this.date =  date? date : '';
//         this.post_id = post_id? post_id : 0;
//     }
// }

// export class User {
//     id: number;
//     username: string;

//     constructor(id: number, username: string){
//         this.id = id;
//         this.username = username;
//     }
// }