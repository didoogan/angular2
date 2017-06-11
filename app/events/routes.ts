import {EventsListComponent} from "./events-list.component";
import {EventDetailComponent} from "./event-detail/event-details.component";
import {Routes} from "@angular/router";

export const appRoutes: Routes = [
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]