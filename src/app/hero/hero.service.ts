import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';


@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes';  // URL to web api
 
    constructor(private http: Http) { }
 
    getHeroes(): Promise<Hero[]> {
        // .get() returns an RxJS observable
        return this.http.get(this.heroesUrl)
            // toPromise() converts the Observable to a Promise
            .toPromise()
            // In the Promise's then() callback, you call the json method of the HTTP Response
            // to extract the data within the response.
            // The response JSON has a single data property, which holds the array of heroes that the caller wants
            .then(response => response.json().data as Hero[])
            // At the end of getHeroes(), you catch server failures and pass them to an error handler.
            .catch(this.handleError);
    }
 
    private handleError(error: any): Promise<any> {
        // for demo purposes only
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }

    // Search for api/hero/:id
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    // Add hero service update() method
    private headers = new Headers({'Content-Type': 'application/json'});

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    // Implement the create() method in the HeroService class
	create(name: string): Promise<Hero> {
		return this.http
		.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
		.toPromise()
		.then(res => res.json().data as Hero)
		.catch(this.handleError);
	}

    // Uses the delete() HTTP method to remove the hero from the server:
    delete(id: number): Promise<void> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

}
