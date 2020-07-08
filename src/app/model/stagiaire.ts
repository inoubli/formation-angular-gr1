import {Formateur} from "./formateur";

export class Stagiaire {
  id: number;
  civilite: string;
  nom: string;
  prenom: string;
  email: string;
  dtNaissance: Date;
  formateur: Formateur;

  constructor(id?: number, civilite?: string, nom?: string, prenom?: string, email?: string, dtNaissance?: Date, formateur?: Formateur) {
    this.id = id;
    this.civilite = civilite;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.dtNaissance = dtNaissance;
    this.formateur = formateur;
  }

  clone(): Stagiaire {
    return new Stagiaire(this.id, this.civilite, this.nom, this.prenom, this.email, this.dtNaissance, this.formateur?.clone());
  }
}
