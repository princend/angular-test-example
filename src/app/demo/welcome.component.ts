import { OnInit } from '@angular/core';

export class WelcomeComponent implements OnInit {
    welcome: string;
    constructor(private userService: UserService) { }
    ngOnInit() {
        this.welcome = this.userService.isLoggedIn ? 'Welcome, ' + this.userService.user.name : 'Please log in.';
    }
}

export class UserService {
    isLoggedIn = false;
    user = { name: '' }
}