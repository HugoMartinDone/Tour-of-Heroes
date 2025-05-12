import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "../models/hero.model";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: "Dr. Cool", class: "WARRIOR" },
      { id: 13, name: "Bazelgeuse", class: "RANGED" },
      { id: 14, name: "Rapide-man", class: "SUPPORT" },
      { id: 15, name: "Aimant-man", class: "TANK" },
      { id: 16, name: "Caoutchouc-man", class: "TANK" },
      { id: 17, name: "Dyn-ami", class: "WARRIOR" },
      { id: 18, name: "Dr. QI", class: "SUPPORT" },
      { id: 19, name: "Lave", class: "WARRIOR" },
      { id: 20, name: "Tornade", class: "RANGED" },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
