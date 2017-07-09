import {Component, Input, Output, EventEmitter} from "@angular/core";
import {IEvent} from "./shared/event.model";

@Component({
    selector: 'tumbnail-cmp',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`
        .green {color: greenyellow !important;}
        .yellow {color: yellow !important;}
        .italic {font-style: italic !important;}
        .bold {font-weight: bold;}
        .thumbnail { min-height: 270px; }
        .pad-left { margin-left: 10px;}
        .well div { color: #bbb;}
    `]
})
export class ThumbnailEvent {
    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();
    someProperty: any = 'Just property';

    clickBtn() {
        this.eventClick.emit(this.event.name);
    }
    logFoo() {
        console.log('foo');
    }
}