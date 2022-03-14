import { Post } from "./post";
import { User } from "./user";

export enum ApiMethods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

export enum Entity {
    user = "User",
    post = "Post",
    comment = "Comment"
}


export interface ApiResponse{
    data: User | Post[] | Comment[];
}

