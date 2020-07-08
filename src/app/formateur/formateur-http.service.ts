import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Formateur} from "../model/formateur";

@Injectable({
  providedIn: 'root'
})
export class FormateurHttpService {

  formateurs: Array<Formateur> = new Array<Formateur>();

  constructor(private http: HttpClient) {
    this.load();
  }

  findAll(): Array<Formateur> {
    return this.formateurs;
  }

  find(id: number): Observable<Formateur> {
    return this.http.get<Formateur>("http://localhost:3000/formateurs/" + id);
  }

  create(formateur: Formateur) {
    return this.http.post<Formateur>("http://localhost:3000/formateurs", formateur).subscribe(resp => {
      this.load()
    }, error => console.log(error));
  }

  update(formateur: Formateur) {
    return this.http.put<Formateur>("http://localhost:3000/formateurs/" + formateur.id, formateur).subscribe(resp => {
      this.load()
    }, error => console.log(error));
  }

  remove(id: number) {
    return this.http.delete<void>("http://localhost:3000/formateurs/" + id).subscribe(resp => {
      this.load()
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Formateur>>("http://localhost:3000/formateurs").subscribe(resp => {
      this.formateurs = resp;
    }, error => console.log(error));
  }
}
