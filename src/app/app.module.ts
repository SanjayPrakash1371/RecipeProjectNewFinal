import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipecardComponent } from './recipecard/recipecard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoComponent } from './favo/favo.component';
import { ReciepeDetailsComponent } from './reciepe-details/reciepe-details.component';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [AppComponent, RecipecardComponent, FavoComponent, ReciepeDetailsComponent, HomeComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
