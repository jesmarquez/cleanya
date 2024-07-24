import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { NewPlaceComponent } from './places/new-place/new-place.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    NewPlaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
