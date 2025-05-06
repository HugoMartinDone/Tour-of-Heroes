import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { HeroService } from '../hero.service';

import { HEROES } from "../mock-heroes";
import { Hero } from "../hero";

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService){}

    ngOnInit(){
        this.fetchHeroes();
    }

    fetchHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
}
