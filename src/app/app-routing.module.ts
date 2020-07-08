import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StagiaireComponent} from "./stagiaire/stagiaire.component";
import {HomeComponent} from "./home/home.component";
import {StagiaireDetailComponent} from "./stagiaire/stagiaire-detail/stagiaire-detail.component";
import {FormateurComponent} from "./formateur/formateur.component";
import {MatiereComponent} from "./matiere/matiere.component";


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "stagiaire", component: StagiaireComponent},
  {path: "stagiaire/:id", component: StagiaireDetailComponent},
  {path: "formateur", component: FormateurComponent},
  {path: "matiere", component: MatiereComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
