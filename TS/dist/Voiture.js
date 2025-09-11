"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Voiture {
    marque;
    vitesse;
    mat;
    // variable de la classe
    static type = 1000;
    constructor(marque, vitesse = 0, mat = "") {
        this.marque = marque;
        this.vitesse = vitesse;
        this.mat = mat;
        this.mat = this.marque + ++Voiture.type;
    }
    // méthode de classe
    static methodStatic() {
    }
    accelerer() {
        this.vitesse += 5;
        console.log(`${this.marque} a accéléré de ${this.vitesse}km/h`);
    }
    setVitesse(vitesse) {
        if (vitesse < 0 || vitesse > 150) {
            console.log("vitesse trop élevée");
            return;
        }
        this.vitesse = vitesse;
    }
}
class VoitureSport extends Voiture {
    accelerer() {
        this.vitesse += 20;
        console.log(`${this.marque} a accéléré de ${this.vitesse}km/h`);
    }
    turbo() {
        this.vitesse += 50;
    }
}
const v = new Voiture("Toyota");
const vs = new VoitureSport("Audi");
v.accelerer();
vs.accelerer();
console.log(v);
console.log(vs);
const tabV = [vs, v];
console.log(tabV);
//# sourceMappingURL=Voiture.js.map