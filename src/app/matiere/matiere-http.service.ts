import {Injectable} from '@angular/core';
import {Matiere} from "../model/matiere";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MatiereHttpService {

  matieres: Array<Matiere> = new Array<Matiere>();

  constructor(private http: HttpClient) {
    this.load();
  }

  findAll(): Array<Matiere> {
    return this.matieres;
  }

  find(id: number): Observable<Matiere> {
    return this.http.get<Matiere>("http://localhost:3000/matieres/" + id);
  }

  async findBis(id: number): Promise<Matiere> {
    try {
      const matiere = await this.http.get<Matiere>("http://localhost:3000/matieres/" + id).toPromise();

      return matiere;
    } catch (e) {
      console.log(e);
    }

    return null;
  }

  create(matiere: Matiere): Observable<Matiere> {
    return this.http.post<Matiere>("http://localhost:3000/matieres", matiere);
  }

  update(matiere: Matiere): Observable<Matiere> {
    return this.http.put<Matiere>("http://localhost:3000/matieres/" + matiere.id, matiere);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>("http://localhost:3000/matieres/" + id);
  }

  load() {
    this.http.get<Array<Matiere>>("http://localhost:3000/matieres").subscribe(resp => {
      this.matieres = resp;
    }, error => console.log(error));
  }
}
