class CompteBancaire{
    constructor(titulaire, solde){
        this.titulaire = titulaire;
        this.solde = solde;
    }

    deposer(montant){
        if( montant > 0 ){
            this.solde += montant;

            return this;
        }
    }

    retirer(montant){
        if( montant <= this.solde ){
            this.solde -= montant;

            return this;
        }
    }

    afficherSolde(){
        console.log(`   Compte ${this.titulaire} Solde est de ${this.solde} €`);        
    }

    virerVers(compteDest, montant){
        if(this.retirer(montant)){
            compteDest.deposer(montant);
        }
    }
}

class CompteEpargne extends CompteBancaire{
    constructor(titulaire, solde, taux){
        super(titulaire, solde);
        this.solde += this.solde * taux / 100;
    }

 
}

class CompteDec extends CompteBancaire{
    constructor(titulaire, solde, dec){
        super(titulaire, solde);
        this.dec = dec;
    }

    retirer(montant){
        if( montant <= (this.solde + this.dec) ){
            this.solde -= montant;
            return this;
        }
    }
}


const cb = new CompteEpargne("Toto", 1000, 3);
const cd = new CompteDec("Tata", 2000, 500);

cb.retirer(1500);
cd.retirer(2550);

// cb.virerVers(cd, 900);

cb.afficherSolde();
cd.afficherSolde();