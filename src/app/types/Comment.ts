import { User } from "./User";

export interface Comment {
    _id: string;
    text: string;
    owner: User;
}
