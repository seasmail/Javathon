import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CompanyCardComponent } from './company-card/company-card.component';
import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule, MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatNativeDateModule
} from '@angular/material';
import { ClientsComponent } from './clients/clients.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {NgMatSearchBarModule} from 'ng-mat-search-bar';
import { ClientCardComponent } from './client-card/client-card.component';
import { CompaniesComponent } from './companies/companies.component';
import {CompanyService} from './company.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompanyCardComponent,
    NavbarComponent,
    ClientsComponent,
    SearchbarComponent,
    CompaniesComponent,
    ClientCardComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    MatGridListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    NgMatSearchBarModule,
    HttpClientModule,
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
