import { Injectable } from '@angular/core';
import { Hero } from './heroes/Hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs'
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  //will return an observable, because http.get() returns observable
  // getHeroes(): Hero[] { 
  //   return HEROES
  // }
getHeroes():Observable<Hero[]> {
  const heroes = of(HEROES);
  this.messageService.add('HeroService: agarré los heroes')
  return heroes;
}



}
