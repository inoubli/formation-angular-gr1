import {Adresse} from "./adresse";
import {Matiere} from "./matiere";

export class Formateur {
  id: number;
  civilite: string;
  nom: string;
  prenom: string;
  email: string;
  experience: number;
  interne: boolean;
  dtEmbauche: Date;
  adresse: Adresse;
  competences: Array<Matiere> = new Array<Matiere>();


  constructor(id?: number, civilite?: string, nom?: string, prenom?: string, email?: string, experience?: number, interne?: boolean, dtEmbauche?: Date, adresse?: Adresse) {
    this.id = id;
    this.civilite = civilite;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.experience = experience;
    this.interne = interne;
    this.dtEmbauche = dtEmbauche;
    this.adresse = adresse;
  }

  clone(): Formateur {
    let formateurClone = new Formateur(this.id, this.civilite, this.nom, this.prenom, this.email, this.experience, this.interne, this.dtEmbauche, this.adresse?.clone());

    this.competences.forEach(val => formateurClone.competences.push(Object.assign({}, val)));
    return formateurClone;
  }
}
