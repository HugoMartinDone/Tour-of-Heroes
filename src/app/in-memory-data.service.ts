import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 12, name: 'Dr. Cool' },
            { id: 13, name: 'Bazelgeuse' },
            { id: 14, name: 'Rapide-man' },
            { id: 15, name: 'Aimant-man' },
            { id: 16, name: 'Caoutchouc-man' },
            { id: 17, name: 'Dyn-ami' },
            { id: 18, name: 'Dr. QI' },
            { id: 19, name: 'Lave' },
            { id: 20, name: 'Tornade' }
        ];
        return {heroes};
    }

    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
}
