import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-main',
    template: `
        <button (click)="onClick('parte1')">parte 1</button>
        <button (click)="onClick('parte2')">parte 2</button>
        <button (click)="onClick('parte3')">parte 3</button>
        <button (click)="onClick('parte4')">parte 4</button>
        <br />
        {{ seccion }}
        <br />

        <div [ngSwitch]="seccion">
            <div *ngSwitchCase="'parte1'"><div app-test></div></div>
            <div *ngSwitchCase="'parte2'"><div app-comp2></div></div>
            <div *ngSwitchCase="'parte3'"><app-parent></app-parent></div>
            <div *ngSwitchCase="'parte4'"><app-servicios></app-servicios></div>
            <div *ngSwitchDefault>seleccionar seccion del training</div>
        </div>
    `,
    styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
    displayTitulo = false
    constructor() {}

    public seccion = ''

    ngOnInit(): void {}

    onClick(value) {
        this.seccion = value
    }
}
