import {Component} from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular 2 events</h1>
        </div>
        <tumbnail-cmp 
        #thumbnail
        (eventClick)="handleEventClicked($event)"
        [event]="event1"></tumbnail-cmp> 
        <h2>{{thumbnail.someProperty}}</h2>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">#thumbnail</button>
    `
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: "Party",
        date: "25/05/2017",
        time: "17:00",
        price: "100.00",
        location: {
            address: "Baker str.",
            city: "London",
            country: "England"
        }
    };
    handleEventClicked(data) {
        console.log(data);
    }
}