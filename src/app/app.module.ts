import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAnimalComponent } from './views/show-animal/show-animal.component';
import {HttpClientModule} from '@angular/common/http' // pour utiliser le web service
@NgModule({
  declarations: [
    AppComponent,
    ShowAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // pour utiliser le web service
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
