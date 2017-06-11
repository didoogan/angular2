import {Component} from "@angular/core";

@Component({
    selector: 'events-app',
    template: `
        <navbar-cmp></navbar-cmp>
        <router-outlet></router-outlet>
    `
})
export class EventsAppComponent {

}