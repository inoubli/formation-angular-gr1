export class Matiere {
  id: number;
  nom: string;
  duree: number;


  constructor(id?: number, nom?: string, duree?: number) {
    this.id = id;
    this.nom = nom;
    this.duree = duree;
  }

  clone(): Matiere {
    return new Matiere(this.id, this.nom, this.duree);
  }
}
