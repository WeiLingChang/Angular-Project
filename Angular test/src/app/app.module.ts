import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { AccordionModule, DropdownModule, SliderModule, MultiSelectModule } from 'primeng/primeng';     //accordion and accordion tab
import { MenuItem } from 'primeng/primeng';            //api



import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { QueryFormComponent } from './query-form/query-form.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { BsbtnDirective } from './directive-demo/bsbtn.directive';
import { QueryResultComponent } from './query-result/query-result.component';
import { CarService } from './service/car.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTableModule,
    SharedModule,
    HttpModule,
    BrowserAnimationsModule,
    DropdownModule,
    SliderModule,
    MultiSelectModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    BirthdayComponent,
    QueryFormComponent,
    DirectiveDemoComponent,
    BsbtnDirective,
    QueryResultComponent
  ],
  providers: [HeroService, MessageService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
