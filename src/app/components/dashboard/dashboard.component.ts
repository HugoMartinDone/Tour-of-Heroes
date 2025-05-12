import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgFor } from "@angular/common";

import { HeroSearchComponent } from "../hero-search/hero-search.component";
import { HeroService } from "../../services/hero.service";

import { Hero } from "../../models/hero.model";

@Component({
  selector: "app-dashboard",
  imports: [NgFor, RouterModule, HeroSearchComponent],
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.fetchHeroes();
  }

  fetchHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
