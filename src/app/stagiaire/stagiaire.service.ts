import {Injectable} from '@angular/core';
import {Stagiaire} from "../model/stagiaire";

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  stagiaires: Array<Stagiaire> = new Array<Stagiaire>();

  constructor() {
    this.stagiaires.push(new Stagiaire(1, "MME", "MACROn", "Brigitte", "b.macron@france.fr", new Date("1953-04-13")));
    this.stagiaires.push(new Stagiaire(2, "M", "MACRON", "Emmanuel", "e.macron@france.fr", new Date("1977-12-21")));
  }

  findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }

  find(id: number): Stagiaire {
    return this.stagiaires.find(stagiaire => stagiaire.id == id);
  }

  remove(id: number) {
    let idx = this.stagiaires.findIndex(stagiaire => stagiaire.id === id);

    if (idx > -1) {
      this.stagiaires.splice(idx, 1);
    }
  }


}
