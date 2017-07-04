import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';

// NgModel lives here
import { FormsModule }          from '@angular/forms';

// components for this app
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';

// services for this app
import { HeroService }          from './hero/hero.service';

// import routing module
import { AppRoutingModule }     from './routing.module';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // import the FormsModule before binding with [(ngModel)]
        FormsModule
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})


export class AppModule { }
