import { Component, OnInit } from '@angular/core'
import { PersonasService } from 'src/app/personas.service'

@Component({
    selector: 'app-servicios',
    template: `
        <h2>Lista</h2>
        <ul *ngFor="let persona of personas">
            <li>{{ persona.nombre }} - {{ persona.edad }}</li>
        </ul>
    `,
    styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
    public personas = []
    constructor(private _personasService: PersonasService) {}

    ngOnInit() {
        this.personas = this._personasService.getPersonas()
    }
}
