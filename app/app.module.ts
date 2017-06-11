import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {ThumbnailEvent} from "./events/event-thumbnail.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {EventService} from "./events/shared/event.service";
import {ToastrService} from "./common/toastr.service";
import {EventDetailComponent} from "./events/event-detail/event-details.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./events/routes";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        ThumbnailEvent,
        NavbarComponent,
        EventDetailComponent
    ],
    providers: [EventService, ToastrService],
    bootstrap: [EventsAppComponent]
})
export class AppModule {


}