// imports js

//imports Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//imports Module
import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';

//imports App
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
