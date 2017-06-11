import {Component, OnInit} from "@angular/core";
import {EventService} from "../shared/event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'app/events/event-detail/event-details.component.html',
    styles: [`
        .container {padding-left: 20px; padding-right: 20px;}
        .event-image {height: 100px;}
    `]
})
export class EventDetailComponent implements OnInit{

  event;
  constructor(
      private _eventService: EventService,
      private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.event = this._eventService.getComponent(
        +this._route.snapshot.params['id']
    );
  }
}