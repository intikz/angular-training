import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IPersona } from './persona'
//import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { throwError, Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
//{providedIn: 'root',}
export class PersonasService {
    private _url: string = '/assets/data/personitas.json' //fake web server

    constructor(private http: HttpClient) {} //instancia del cliente http, y nos referimos con el metodo http.get

    getPersonas() {
        return [
            { nombre: 'pedro', edad: 10 },
            { nombre: 'luana', edad: 20 },
            { nombre: 'matilda', edad: 30 },
        ]
    }

    getPersonitas(): Observable<IPersona[]> {
        //casteamos a un array de personas
        return this.http
            .get<IPersona[]>(this._url)
            .pipe(catchError(this.errorHandler))
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || 'Esto es un Server Error')
    }
}
