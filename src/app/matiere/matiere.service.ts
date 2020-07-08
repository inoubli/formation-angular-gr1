import {Injectable} from '@angular/core';
import {Matiere} from "../model/matiere";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  matieres: Array<Matiere> = new Array<Matiere>();

  constructor(private http: HttpClient) {
  }

  findAll(): Array<Matiere> {
    return this.matieres;
  }

  find(id: number): Matiere {
    return this.matieres.find(matiere => matiere.id == id);
  }

  remove(id: number) {
    let idx = this.matieres.findIndex(matiere => matiere.id === id);

    if (idx > -1) {
      this.matieres.splice(idx, 1);
    }
  }
}
