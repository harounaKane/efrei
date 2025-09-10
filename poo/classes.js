class Animal{
    #poids;
    static compt = 0;

    constructor(nom, poids){
        if( new.target == Animal ) throw new Error("Classe abtraite pas possible à instancier !");

        this.nom = nom;
        this.#poids = poids;       
        
        Animal.compt++;

//        Object.seal(this)
    }

    presentation(){
        return `je suis un ${this.nom} mon poids est de ${this.#poids} KGs`
    }

    getPoids(){return this.#poids}
    setPoids(poids){
        this.#poids = poids;
    }

    toString(){
        return this.nom + " de poids " + this.#poids;
    }
}

class Lion extends Animal{
    constructor(nom, poids, type){
        super(nom, poids);
        this.type = type;
    }


    presentation(){
        return super.presentation() + " je suis de type " + this.type;
    }

    toString(){
        return super.toString() + " de type " + this.type
    }
}


l = new Lion("Simba", 150, "carnivore");


console.log( l instanceof Animal );
console.log(  );
