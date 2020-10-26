import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeRezeptKleinComponent } from './home/home-rezept-klein/home-rezept-klein.component';
import { RezeptAnsichtGrossComponent } from './rezept-ansicht-gross/rezept-ansicht-gross.component';
import { RezeptFormularComponent } from './rezept-formular/rezept-formular.component';
import { RezeptSucheComponent } from './rezept-suche/rezept-suche.component';
import { HomeDropdownsComponent } from './home/home-dropdowns/home-dropdowns.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EnumToArrayPipe } from './Pipes/enum-to-array.pipe';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'rezept/suche', component: RezeptSucheComponent},
  {path: 'rezept/erstellen', component: RezeptFormularComponent},
  {path: 'rezept/ansicht/:id', component: RezeptAnsichtGrossComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeRezeptKleinComponent,
    RezeptAnsichtGrossComponent,
    RezeptFormularComponent,
    RezeptSucheComponent,
    HomeDropdownsComponent,
    HeaderComponent,
    PageNotFoundComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
