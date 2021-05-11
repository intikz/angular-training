import { Component, OnInit } from '@angular/core'

@Component({
    selector: '[app-comp2]',
    template: `
        <h2>comp2</h2>

        <br />
        <label>ngIf</label>
        <h2 *ngIf="displayTitulo; else primerBlock">condicional</h2>

        <ng-template #primerBlock>
            <h2>titulo escondido</h2>
        </ng-template>

        <div *ngIf="displayTitulo; then thenBlock; else elseBlock"></div>

        <ng-template #thenBlock>
            <h2>titulo Then</h2>
        </ng-template>

        <ng-template #elseBlock>
            <h2>titulo Else</h2>
        </ng-template>

        <br />
        <label>ngSwitch</label>
        <div [ngSwitch]="color">
            <div *ngSwitchCase="'red'">Rojo</div>
            <div *ngSwitchCase="'blue'">Azul</div>
            <div *ngSwitchCase="'green'">Verde</div>
            <div *ngSwitchDefault>Otro default</div>
        </div>
        <br />
        <label>ngFor</label>
        <div
            *ngFor="
                let color of colors;
                index as i;
                first as f;
                last as l;
                odd as o;
                even as e
            "
        >
            <h3>
                {{ i }} {{ color }}, <br />es el primero? {{ f }}, <br />es el
                ultimo? {{ l }} <br />es index impar? {{ o }}, <br />es index
                par? {{ e }}
            </h3>
        </div>
    `,
    styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
    displayTitulo = false
    constructor() {}

    ngOnInit(): void {}

    public color = 'red'

    public colors = ['red', 'green', 'blue', 'yellow']
}
