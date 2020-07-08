import {Component, OnInit} from '@angular/core';
import {Stagiaire} from "../model/stagiaire";
import {Formateur} from "../model/formateur";
import {StagiaireHttpService} from "./stagiaire-http.service";
import {FormateurHttpService} from "../formateur/formateur-http.service";

@Component({
  selector: 'stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  stagiaireForm: Stagiaire = null;

  constructor(private stagiaireService: StagiaireHttpService, private formateurService: FormateurHttpService) {

  }

  ngOnInit(): void {
  }

  list(): Array<Stagiaire> {
    return this.stagiaireService.findAll();
  }

  listFormateur(): Array<Formateur> {
    return this.formateurService.findAll();
  }

  add() {
    this.stagiaireForm = new Stagiaire();
    this.stagiaireForm.formateur = new Formateur();
  }

  edit(id: number) {
    // for(let stagiaire of this.stagiaires) {
    //   if(stagiaire.id === id) {
    //     this.stagiaireForm = stagiaire;
    //     break;
    //   }
    // }

    this.stagiaireService.find(id).subscribe(resp => {
      this.stagiaireForm = resp;
      if (!this.stagiaireForm.formateur) {
        this.stagiaireForm.formateur = new Formateur();
      }
    }, error => console.log(error));
  }

  save() {
    if (this.stagiaireForm.id) {
      this.stagiaireService.update(this.stagiaireForm);
    } else {
      this.stagiaireService.create(this.stagiaireForm);
    }

    this.cancel();
  }

  remove(id: number) {
    this.stagiaireService.remove(id);
  }

  cancel() {
    this.stagiaireForm = null;
  }
}
