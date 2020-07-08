export class Adresse {
  rue: string;
  complement: string;
  codePostal: string;
  ville: string;
  pays: string;

  constructor(rue?: string, complement?: string, codePostal?: string, ville?: string, pays?: string) {
    this.rue = rue;
    this.complement = complement;
    this.codePostal = codePostal;
    this.ville = ville;
    this.pays = pays;
  }

  clone(): Adresse {
    return new Adresse(this.rue, this.complement, this.codePostal, this.ville, this.pays);
  }
}
