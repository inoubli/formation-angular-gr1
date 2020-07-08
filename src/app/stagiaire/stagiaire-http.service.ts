import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stagiaire} from "../model/stagiaire";

@Injectable({
  providedIn: 'root'
})
export class StagiaireHttpService {

  stagiaires: Array<Stagiaire> = new Array<Stagiaire>();

  constructor(private http: HttpClient) {
    this.load();
  }

  findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }

  find(id: number): Observable<Stagiaire> {
    return this.http.get<Stagiaire>("http://localhost:3000/stagiaires/" + id);
  }

  create(stagiaire: Stagiaire) {
    return this.http.post<Stagiaire>("http://localhost:3000/stagiaires", stagiaire).subscribe(resp => {
      this.load()
    }, error => console.log(error));
  }

  update(stagiaire: Stagiaire) {
    return this.http.put<Stagiaire>("http://localhost:3000/stagiaires/" + stagiaire.id, stagiaire).subscribe(resp => {
      this.load()
    }, error => console.log(error));
  }

  remove(id: number) {
    return this.http.delete<void>("http://localhost:3000/stagiaires/" + id).subscribe(resp => {
      this.load()
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Stagiaire>>("http://localhost:3000/stagiaires").subscribe(resp => {
      this.stagiaires = resp;
    }, error => console.log(error));
  }
}
