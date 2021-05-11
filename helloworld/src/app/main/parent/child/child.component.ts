import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
// import * as EventEmitter from 'events'

@Component({
    selector: 'app-child',
    template: `
        <h2>{{ 'Un pais: ' + parentData }}</h2>
        <h2>{{ 'again pais: ' + monumento }}</h2>
        <button (click)="fireEvent()">Send Event</button>
    `,
    styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
    // estas 2 son lo mismo
    @Input() public parentData // <h2>{{ 'Un pais: ' + parentData }}</h2>
    @Input('otraData') public monumento //  <h2>{{ 'again pais: ' + monumento }}</h2>
    //

    @Output() public childEvent = new EventEmitter()
    constructor() {}

    ngOnInit(): void {}
    fireEvent() {
        this.childEvent.emit('cocodrilos')
    }
}
