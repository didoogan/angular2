import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {ThumbnailEvent} from "./events/event-thumbnail.component";
import {NavbarComponent} from "./navbar/navbar.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        ThumbnailEvent,
        NavbarComponent
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {


}