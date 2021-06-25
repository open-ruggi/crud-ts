export interface BaseUser {
    name: string;
    user: string;
    password: string;
}

export interface User  extends BaseUser{
    id: string;
}