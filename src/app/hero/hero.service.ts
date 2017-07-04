import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {

    constructor() { }

    // return the array of heroes from mock-heroes
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);

        /* 
        to test slow connections
        return new Promise(resolve => {
            // simulate server latency with 2 sec delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        })
        */
    }

    // filteres  the heroes list from getHeroes() by id
    getHero(id: number): Promise<Hero> {
		return this.getHeroes()
				.then(heroes => heroes.find(hero => hero.id === id));
	}

}
