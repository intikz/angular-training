import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
// import {Location} from '@angular/common';
// import { MessageService } from '../message.service';

import {Hero} from './Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes: Hero[] = [];
  
  constructor(
    private heroService: HeroService, 
    // private messageService: MessageService,
    // private route: ActivatedRoute,
    // private location: Location,
    ) { }

  ngOnInit() {
    this.getHeroes();
  } 

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }





  //old
   // heroes = HEROES;
   // selectedHero?: Hero;

    // getHeroes(): void {
    //   this.heroes = this.heroService.getHeroes();
    // }

    // onSelect(hero: Hero): void{
    //   this.selectedHero = hero;
    //   this.messageService.add(`HeroesComponent: heroe seleccionado id=${hero.id}`)
    // }


}
