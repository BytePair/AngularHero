import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService }              from '../hero/hero.service';
import { Hero }                     from '../hero/hero';

import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

    constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}

    // variables for HeroDetailComponent class
    @Input() hero: Hero;

    // function for HeroDetailComponent class
    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }

    // navigates backward one step in the browser's history stack using the Location service
    goBack(): void {
        this.location.back();
    }
}
