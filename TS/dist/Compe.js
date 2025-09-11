"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Compte {
    titulaire;
    solde;
    num;
    constructor(titulaire, solde, num) {
        this.titulaire = titulaire;
        this.solde = solde;
        this.num = num;
        this.titulaire = titulaire;
        this.solde = solde;
        this.num = num;
    }
    virerVers(compteDes, montant) {
        this.solde -= montant;
        compteDes.solde += montant;
        return this;
    }
}
class CompteAvecDec extends Compte {
}
//# sourceMappingURL=Compe.js.map