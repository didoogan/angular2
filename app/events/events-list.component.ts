import {Component, OnInit} from "@angular/core";
import {EventService} from "./shared/event.service";
import {ToastrService} from "../common/toastr.service";

@Component({
    template: `
        <div>
            <h1>Upcoming Angular 2 events, yo</h1>
        </div>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <tumbnail-cmp 
                    #thumbnail
                    (eventClick)="handleEventClicked(event.name)"
                    [event]="event">
                </tumbnail-cmp> 
                <!--<h2>{{thumbnail.someProperty}}</h2>-->
                <!--<button class="btn btn-primary" (click)="thumbnail.logFoo()">#thumbnail</button>-->
            </div>
        </div>

    `
})
export class EventsListComponent implements OnInit{
  events;

  constructor (
      private _eventService: EventService,
      private _toastrService: ToastrService
  ) { }

  handleEventClicked(data) {
    this._toastrService.success(data);
  }


    ngOnInit() {
      this.events = this._eventService.getComponents();
  }
}