import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroDetailsComponent} from "../hero-details/hero-details.component";
import { HeroService } from '../hero.service';
import { MessageService } from "../message.service";

import { HEROES } from "../mock-heroes";
import { Hero } from "../hero";

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, HeroDetailsComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
    heroes: Hero[] = [];
    selectedHero?: Hero;

    constructor(private heroService: HeroService, private messageService: MessageService){}

    ngOnInit(){
        this.fetchHeroes();
    }

    fetchHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void{
        this.selectedHero = hero;
        this.messageService.add(`HeroesComponent : ${hero.name} selected`);
    }
}
