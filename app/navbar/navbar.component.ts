import {Component} from "@angular/core";
import {AuthService} from "../user/auth.service";

@Component({
    selector: 'navbar-cmp',
    templateUrl: 'app/navbar/navbar.component.html',
    styles: [`
        .active { color: #F97924 !important; }
    `],
})
export class NavbarComponent {
  constructor(private _auth: AuthService) {}
}