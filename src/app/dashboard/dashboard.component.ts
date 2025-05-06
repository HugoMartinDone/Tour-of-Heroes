import { Component, OnInit } from '@angular/core';
import { NgFor } from "@angular/common";

import { HeroService } from '../hero.service';
import { RouterModule } from "@angular/router";

import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.fetchHeroes();
  }

  fetchHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
