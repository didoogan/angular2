import {EventsListComponent} from "./events-list.component";
import {EventDetailComponent} from "./event-detail/event-details.component";
import {Routes} from "@angular/router";
import {CreateEventComponent} from "./create-event.component";
import {Error404Component} from "../errors/404.component";
import {EventRouteActivator} from "./event-route-activator.service";

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailComponent,
      canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
];