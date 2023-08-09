import { Post } from './Post';

export interface User {
    _id: string;
    name: string;
    surname: string;
    profilePicture: string;
    posts: string[];
    followers: string[];
    following: string[];
    description: '';
}

export interface PopulatedUser {
    _id: string;
    name: string;
    surname: string;
    profilePicture: string;
    posts: Post[];
    followers: string[];
    following: string[];
    description: '';
}
