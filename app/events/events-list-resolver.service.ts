import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {EventService} from "./shared/event.service";

@Injectable()
export class EventsListResolver implements Resolve<any> {

    constructor(private _eventService: EventService) {}

    resolve() {
        return this._eventService.getComponents()
    }

}