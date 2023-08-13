import { User } from "./User";

export interface Post {
    _id: string;
    message: string;
    image: string;
    likes: string[];
    comments: string[];
    bookmarks: string[];
    owner: User;
    createdAt: string;
}
