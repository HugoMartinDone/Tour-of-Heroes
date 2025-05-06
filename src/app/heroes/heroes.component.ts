import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroDetailsComponent} from "../hero-details/hero-details.component";

import { HEROES } from "../mock-heroes";
import { Hero } from "../hero";

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, HeroDetailsComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
    heroes: Hero[] = HEROES;
    selectedHero?: Hero;

    onSelect(hero: Hero): void{
        this.selectedHero = hero;
        console.log(hero);
    }
}
