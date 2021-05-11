import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'app-parent',
    template: `
        <app-child
            (childEvent)="message = $event"
            [parentData]="pais"
            [otraData]="monumento"
        ></app-child>
        {{ message | uppercase }}
        {{ message | titlecase }}
        {{ message | slice: 4:7 }}
        {{ message | json }}
        <br />
        <br />
        <h2>{{ 5.678 | number: '1.2-3' }}</h2>
        <h2>{{ 5.678 | number: '3.4-3' }}</h2>
        <h2>{{ 5.678 | number: '3.1-2' }}</h2>
        <h2>{{ 0.25 | percent }}</h2>
        <h2>{{ 0.25 | currency }}</h2>
        <h2>{{ 0.25 | currency: 'GBP' }}</h2>
        <h2>{{ 0.25 | currency: 'GBP':'code' }}</h2>
        <br />
        <h2>{{ date }}</h2>
        <h2>{{ date | date: 'short' }}</h2>
        <h2>{{ date | date: 'shortDate' }}</h2>
        <h2>{{ date | date: 'shortTime' }}</h2>
    `,
    styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
    public pais = 'Egipto'
    public monumento = 'Piramides'
    public message = ''

    public date = new Date()
    constructor() {}

    ngOnInit(): void {}
}
