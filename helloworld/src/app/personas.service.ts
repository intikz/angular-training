import { Injectable } from '@angular/core'

@Injectable()
//{providedIn: 'root',}
export class PersonasService {
    constructor() {}

    getPersonas() {
        return [
            { nombre: 'pedrito', edad: 10 },
            { nombre: 'luana', edad: 20 },
            { nombre: 'matilda', edad: 30 },
        ]
    }
}
