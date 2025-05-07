import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { MessageService } from './message.service';

import { Hero } from './hero';


@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private heroesUrl = 'api/heroes';
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService,
    ) { }

    log(message: string): void {
        this.messageService.add(`HeroService : ${message}`)
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
}

    getHeroes() : Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap(_ => this.log("fetched heroes")),
                catchError(this.handleError<Hero[]>('getHeroes', []))
            );
    }

    getHero(id: Number) : Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url)
            .pipe(
                tap(h => this.log(`fetched hero with id ${h.id}`)),
                catchError(this.handleError<Hero>(`getHero id=${id}`))
            );
    }

    updateHero(hero: Hero) : Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
        .pipe(
            tap(_ => this.log(`updated hero id=${hero.id}`)),
            catchError(this.handleError<any>('updateHero'))
        );
    }
}
