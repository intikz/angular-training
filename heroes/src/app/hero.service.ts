import { Injectable } from '@angular/core';
import { Hero } from './heroes/Hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs'
import { catchError, map, tap} from 'rxjs/operators'
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor( private http: HttpClient, private messageService: MessageService) { }

  //will return an observable, because http.get() returns observable
  // getHeroes(): Hero[] { 
  //   return HEROES
  // }

  // getHeroes():Observable<Hero[]> {
  //   const heroes = of(HEROES); //RxJS
  //   this.messageService.add('HeroService: agarré los heroes')
  //   return heroes;
  // }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('traje los heroes')),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
      );
  }

  getHero(id: number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(tap(_ => this.log(`toma el heroe con id ${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
    //old    
    // // const hero = HEROES.find(h => h.id === id)!;
    // this.messageService.add(`HeroService: toma el heroe con id ${id}`);
    // return of(hero) // RxJS, asynchronous signature. It returns a mock hero as an Observable, 
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  //returns an error handler function to catchError that it has configured with both the name of the operation that failed and a safe return value.

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?:T){
    return(error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }





}


