import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StagiaireComponent} from './stagiaire/stagiaire.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from "@angular/forms";
import {AgePipe} from './age.pipe';
import {StagiaireDetailComponent} from './stagiaire/stagiaire-detail/stagiaire-detail.component';
import {StagiaireService} from "./stagiaire/stagiaire.service";
import { FormateurComponent } from './formateur/formateur.component';
import {FormateurService} from "./formateur/formateur.service";
import { MatiereComponent } from './matiere/matiere.component';
import {MatiereService} from "./matiere/matiere.service";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StagiaireComponent,
    HomeComponent,
    HeaderComponent,
    AgePipe,
    StagiaireDetailComponent,
    FormateurComponent,
    MatiereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [FormateurService, StagiaireService, MatiereService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
