import {Component, OnInit} from '@angular/core';
import {Formateur} from "../model/formateur";
import {Adresse} from "../model/adresse";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Matiere} from "../model/matiere";
import {FormateurHttpService} from "./formateur-http.service";
import {MatiereHttpService} from "../matiere/matiere-http.service";

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  formateurForm: Formateur = null;

  formateurModal: Formateur = null;

  matieres: Array<Matiere> = null;

  drop(event: CdkDragDrop<Matiere[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


  constructor(private formateurService: FormateurHttpService, private matiereService: MatiereHttpService) {
  }

  ngOnInit(): void {
  }

  list(): Array<Formateur> {
    return this.formateurService.findAll();
  }

  add() {
    this.formateurForm = new Formateur();
    this.formateurForm.adresse = new Adresse();
  }

  edit(id: number) {
    this.formateurService.find(id).subscribe(resp => {
      this.formateurForm = resp;
      if (!this.formateurForm.adresse) {
        this.formateurForm.adresse = new Adresse();
      }
    }, error => console.log(error));

  }

  modal(id: number) {
    this.formateurService.find(id).subscribe(resp => {
      this.formateurModal = resp;
      this.matieres = new Array<Matiere>();
      this.matiereService.findAll().forEach(val => {
        if (this.formateurModal.competences.findIndex(mat => mat.id == val.id) == -1) {
          this.matieres.push(Object.assign({}, val))
        }
      });
    }, error => console.log(error));
  }

  saveModal() {
    this.formateurService.update(this.formateurModal);
  }

  save() {
    if (this.formateurForm.id) {
      this.formateurService.update(this.formateurForm);
    } else {
      this.formateurService.create(this.formateurForm);
    }

    this.cancel();
  }

  remove(id: number) {
    this.formateurService.remove(id);
  }

  cancel() {
    this.formateurForm = null;
  }

}
