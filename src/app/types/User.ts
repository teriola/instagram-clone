export interface User {
    _id: string;
    name: string;
    surname: string;
    email: string;
    profilePicture: string;
    accessToken: string;
    followers?: string[];
    following?: string[];
    bookmarks?: string[];
    description?: string;
}
