export interface BaseUser {
    username: string;
    password: string;
}

export interface User  extends BaseUser{
    id: string;
}