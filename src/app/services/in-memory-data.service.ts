import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero.model';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 12, name: 'Dr. Cool', class: "TEST" },
            { id: 13, name: 'Bazelgeuse', class: "TEST" },
            { id: 14, name: 'Rapide-man', class: "TEST" },
            { id: 15, name: 'Aimant-man', class: "TEST" },
            { id: 16, name: 'Caoutchouc-man', class: "TEST" },
            { id: 17, name: 'Dyn-ami', class: "TEST" },
            { id: 18, name: 'Dr. QI', class: "TEST" },
            { id: 19, name: 'Lave', class: "TEST" },
            { id: 20, name: 'Tornade', class: "TEST" }
        ];
        return {heroes};
    }

    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
}
