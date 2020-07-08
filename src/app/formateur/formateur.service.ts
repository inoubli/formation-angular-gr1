import { Injectable } from '@angular/core';
import {Formateur} from "../model/formateur";
import {Adresse} from "../model/adresse";
import {Stagiaire} from "../model/stagiaire";

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  formateurs: Array<Formateur> = new Array<Formateur>();

  constructor() {
    this.formateurs.push(new Formateur(1, "M", "SULTAN", "Eric", "e.sultan@ajc.fr", 22, true, new Date("2016-07-01"), new Adresse("1 rue de la Paix", "", "75008", "Paris", "France")));
    this.formateurs.push(new Formateur(2, "M", "GOZLAN", "Olivier", "o.gozlan@ajc.fr", 15, true, new Date("2017-01-01")));
    this.formateurs.push(new Formateur(3, "M", "BESSERON", "Sylvain", "sbesseron@ajc.fr", 17, true, new Date("2018-05-01"), new Adresse("15 rue Rougemont", "2ème étage", "75009", "Paris", "France")));
  }

  findAll(): Array<Formateur> {
    return this.formateurs;
  }

  find(id: number): Formateur {
    return this.formateurs.find(formateur => formateur.id == id);
  }

  remove(id: number) {
    let idx = this.formateurs.findIndex(formateur => formateur.id === id);

    if (idx > -1) {
      this.formateurs.splice(idx, 1);
    }
  }
}
