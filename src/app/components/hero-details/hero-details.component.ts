import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeroService } from '../../services/hero.service';

import { Hero } from "../../models/hero.model";
import { HeroClass } from "../../models/hero-class.enum";

@Component({
  selector: 'app-hero-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent implements OnInit {
    @Input() hero?: Hero;
    form: FormGroup = new FormGroup({
        name: new FormControl("", Validators.required),
        class: new FormControl("", Validators.required)
    });
    classes = HeroClass;

    constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
    ) {}

    ngOnInit(){
        this.fetchHero();
    }

    fetchHero(): void{
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.heroService.getHero(id)
            .subscribe(hero => {
                this.hero = hero;
                this.form.setValue({
                    name: hero.name,
                    class: hero.class
                });
            });
    }

    save(): void{
        if(this.hero){
            this.heroService.updateHero(this.hero)
                .subscribe(() => this.goBack());
        }
    }

    goBack(): void {
        this.location.back();
    }

}
