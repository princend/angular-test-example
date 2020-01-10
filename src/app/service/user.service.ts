import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
    isLoggedIn: boolean;
    user: UserModel;
    constructor() { }

}

export interface UserModel {
    name: string;

}