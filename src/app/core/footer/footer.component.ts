import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { UserService } from "../user/user.service";

@Component({
    templateUrl: '/footer.component.html',
    selector: 'ap-footer'
})
export class FooterComponent implements OnInit {
    
    user$: Observable<User>;
    constructor(private userService: UserService) {}
    ngOnInit(): void {
        this.user$ = this.userService.getUser()
    }
}