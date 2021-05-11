import { Component, OnInit } from '@angular/core'

@Component({
    selector: '[app-test]',
    template: `<h2>este template {{ name }}</h2>
        <h2>{{ 2 + 2 }}</h2>
        <h2>{{ 'holi ' + name }}</h2>
        <h2>{{ name.length }}</h2>
        <h2>{{ name.toUpperCase() }}</h2>

        <input id="{{ myId }}" type="text" value="ini" />
        <input disabled="false" [id]="myId" type="text" value="ini" />
        <input [disabled]="false" [id]="myId" type="text" value="ini" />
        <input [disabled]="isDisabled" [id]="myId" type="text" value="ini" />
        <input bind-disabled="isDisabled" [id]="myId" type="text" value="ini" />

        <h2 class="text-success">Monchi</h2>
        <h2 [class]="successClass">Monchi</h2>
        <h2 class="text-special" [class]="successClass">Monchi</h2>
        <h2 [class.text-danger]="hasError">ruby</h2>
        <h2 [ngClass]="msgClass">ruby</h2>

        <h2 [style.color]="highlightColor">style binding</h2>
        <h2 [style.color]="hasError ? 'red' : 'green'">style binding 2</h2>
        <h2 [ngStyle]="titleStyles">style binding 3</h2>

        <button (click)="onClick($event)">Saludar</button>
        <button (click)="saludo = 'Miau'">Miau</button><br />
        {{ saludo }}<br /><br />

        <input #myInput type="text" /><br />
        <button (click)="logMessage(myInput.value)">Log</button>
        <button (click)="logMessage(myInput)">elemento</button>
        <br /><br />
        <label>2 way binding</label><br />
        <input [(ngModel)]="update" type="text" />
        {{ update }} `,

    styles: [
        `
            div {
                color: red;
            }

            .text-success {
                color: green;
            }
            .text-danger {
                color: red;
            }
            .text-special {
                font-style: italic;
            }
        `,
    ],
})
export class TestComponent implements OnInit {
    public name = 'inti'
    public myId = 'testId'
    public isDisabled = true

    public successClass = 'text-success'
    public hasError = true
    public isSpecial = true

    public highlightColor = 'orange'
    public titleStyles = {
        color: 'blue',
        fontStyle: 'italic',
    }

    public msgClass = {
        'text-success': !this.hasError,
        'text-danger': this.hasError,
        'text-special': this.isSpecial,
    }

    public saludo = ''
    constructor() {}

    public update = ''

    ngOnInit(): void {}

    saludar() {
        this.saludo = 'Holi ' + this.name
        console.log(this.saludo)
    }
    // <h2>{{saludar()}}</h2>
    //test2

    //properties of DOM event
    onClick(event) {
        console.log(event)
        console.log(event.type)
        this.saludar()
    }

    logMessage(value) {
        console.log(value)
    }
}
