import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'tumbnail-cmp',
    templateUrl: 'app/events/event-thumbnail.component.html'
})
export class ThumbnailEvent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();
    someProperty: any = 'Just property';

    clickBtn() {
        this.eventClick.emit(this.event.name);
    }
    logFoo() {
        console.log('foo');
    }
}