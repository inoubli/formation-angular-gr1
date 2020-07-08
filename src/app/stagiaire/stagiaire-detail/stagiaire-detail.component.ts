import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Stagiaire} from "../../model/stagiaire";
import {StagiaireService} from "../stagiaire.service";

@Component({
  selector: 'app-stagiaire-detail',
  templateUrl: './stagiaire-detail.component.html',
  styleUrls: ['./stagiaire-detail.component.css']
})
export class StagiaireDetailComponent implements OnInit {

  stagiaire: Stagiaire = null;

  constructor(private activatedRoute: ActivatedRoute, private stagiaireService: StagiaireService) {
    this.activatedRoute.params.subscribe(params => {
      this.stagiaire = this.stagiaireService.find(params.id);
    });


  }

  ngOnInit(): void {
  }

}
