import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../../services/hero.service';

import { Hero } from "../../models/hero.model";

@Component({
  selector: 'app-hero-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent implements OnInit {
    @Input() hero?: Hero;

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
            .subscribe(hero => this.hero = hero);
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
