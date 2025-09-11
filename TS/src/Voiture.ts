class Voiture{
    // variable de la classe
    public static type:number = 1000;
    constructor(public marque:string, protected vitesse:number = 0, private mat:string | number= ""){

        this.mat = this.marque + ++Voiture.type;
    }
    // méthode de classe
    static methodStatic():void{
     
    }

    accelerer():void {
        this.vitesse+=5;
        console.log(`${this.marque} a accéléré de ${this.vitesse}km/h`);  
    }

    setVitesse(vitesse:number):void{
        if( vitesse < 0 || vitesse > 150 ){
            console.log("vitesse trop élevée");
            return;
        }

        this.vitesse = vitesse;
    }
}


class VoitureSport extends Voiture{
    accelerer(): void {
         this.vitesse+=20;
        console.log(`${this.marque} a accéléré de ${this.vitesse}km/h`);
    }

    turbo():void{
        this.vitesse+=50;
    }
}

const v = new Voiture("Toyota");
const vs = new VoitureSport("Audi");
v.accelerer();
vs.accelerer();

console.log( v );
console.log( vs );

const tabV:Voiture[] = [vs, v];

console.log(tabV);
