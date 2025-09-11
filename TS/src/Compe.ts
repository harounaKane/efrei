class Compte{
    constructor(public titulaire:string, private solde:number, protected num:string){
        this.titulaire = titulaire;
        this.solde = solde;
        this.num = num;
    }

    virerVers(compteDes:Compte, montant:number):Compte {
        this.solde -= montant;
        compteDes.solde += montant;

        return this;
    }
}

class CompteAvecDec extends Compte{
    
}