import { Component, OnInit } from '@angular/core'
import { PersonasService } from 'src/app/persona.service'

@Component({
    selector: 'app-servicios',
    template: `
        <h2>Lista</h2>
        <ul *ngFor="let persona of personas">
            <li>{{ persona.nombre }} - {{ persona.edad }}</li>
        </ul>
        <h2>Lista personitas</h2>
        <ul *ngFor="let persona of personitas">
            <li>{{ persona.nombre }} - {{ persona.edad }}</li>
        </ul>
        {{ errorMsg }}
        <p>
            si rompo la url muestra error: Http failure response for
            http://localhost:4200/assets/data/personitas1.json: 404 Not Found
        </p>
    `,
    styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
    public personas = []
    public personitas = []
    public errorMsg
    constructor(private _personaService: PersonasService) {}

    ngOnInit() {
        this.personas = this._personaService.getPersonas()

        this._personaService
            .getPersonitas() // pq este recibe un observable, debo subscribirme
            .subscribe((data) => (this.personitas = data))

        this._personaService.getPersonitas().subscribe(
            (data) => (this.personitas = data), //Handle request
            (error) => {
                this.errorMsg = error
                console.log(this.errorMsg)
            } // Handle error
            // ()=>{}//  'onCompleted ' callback    // No errors, route to new page here
        )

        //asignando the personita data to the personita property
        //una vez que me suscribo, recibo la data y la asigno a una class property
    }
}
