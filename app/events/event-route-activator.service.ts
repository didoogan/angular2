import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import {EventService} from "./shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate{

  constructor(private eventService: EventService, private _router: Router) {}

  canActivate(router: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getComponent(+router.params['id']);
    if (!eventExists) {
       this._router.navigate(['/404']);
    }
    return eventExists;
  }
}