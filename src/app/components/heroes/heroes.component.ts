import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { HeroService } from '../../services/hero.service';

import { Hero } from "../../models/hero.model";
import { HeroClass } from "../../models/hero-class.enum";

@Component({
    selector: 'app-heroes',
    imports: [ReactiveFormsModule, CommonModule, RouterModule],
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
    form: FormGroup = new FormGroup({
        name: new FormControl("", Validators.required),
        class: new FormControl("", Validators.required)
    })
    classes = Object.values(HeroClass).filter(x => typeof x !== "number");
    heroes: Hero[] = [];

    constructor(private heroService: HeroService){}

    ngOnInit(){
        this.fetchHeroes();
    }

    fetchHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    isFormValid(): boolean{
        return this.form.value.name && this.form.value.class;
    }

    createHero(){
        if(!this.isFormValid()){
            return;
        }
        let hero: Hero = this.form.value;
        hero.name = hero.name.trim();
        this.heroService.addHero(hero).subscribe(hero => {
            this.heroes.push(hero);
            this.resetForm();
        });
        console.log(hero);
    }

    resetForm(){
        this.form.setValue({
            name:"",
            class:""
        });
    }

    add(name:string){
        name = name.trim()
        if(!name){ return };
        this.heroService.addHero( { name } as Hero)
            .subscribe(hero => this.heroes.push(hero));
    }

    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero.id).subscribe();
    }
}
