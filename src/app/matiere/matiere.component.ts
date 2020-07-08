import {Component, OnInit} from '@angular/core';
import {Matiere} from "../model/matiere";
import {MatiereHttpService} from "./matiere-http.service";

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {

  matiereForm: Matiere = null;

  constructor(private matiereService: MatiereHttpService) {
  }

  ngOnInit(): void {
  }

  list(): Array<Matiere> {
    return this.matiereService.findAll();
  }

  add() {
    this.matiereForm = new Matiere();
  }

  async edit(id: number) {

    try {
      this.matiereForm = await this.matiereService.findBis(id);


      console.log(this.matiereForm);
    } catch (e) {
      console.log(e);
    }


    // this.matiereService.find(id).subscribe(resp => {
    //   this.matiereForm = resp;
    // }, error => console.log(error));
  }

  save() {
    if (this.matiereForm.id) {
      this.matiereService.update(this.matiereForm).subscribe(resp => {
        this.matiereService.load()
      }, error => console.log(error));
    } else {
      this.matiereService.create(this.matiereForm).subscribe(resp => {
        this.matiereService.load()
      }, error => console.log(error));
    }

    this.cancel();
  }

  remove(id: number) {
    this.matiereService.remove(id).subscribe(resp => {
      this.matiereService.load()
    }, error => console.log(error));
  }

  cancel() {
    this.matiereForm = null;
  }

}
