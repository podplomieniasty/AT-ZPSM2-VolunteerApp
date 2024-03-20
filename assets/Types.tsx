type User = {
    id?: number;
    username?: string;
    fullname?: string;
    number?: string;
    password?: string;
    image?: string;
}

type Post = {
    id: number;
    postBy: number;
    type: string;
    dogs: number[];
    createdOn: string;
    deadlineDate: string;
    deadlineHour: string;
    duration: string;
    details: string;
}

type Pet = {
    id: number;
    name: string;
    breed: string;
    details: string;
    image: string;
}

export type {User, Post, Pet};