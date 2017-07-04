import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';



@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

    // variables for HeroesComponent class
    title = 'My Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    // functions for HeroesComponent class
    constructor(
        private router: Router,
        private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes =  heroes);
    }

    gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

}
