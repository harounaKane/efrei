type Sexe = "H" | "F";
let genre:Sexe = "H";

type Employe = {id: number};
type Profil = {nom: string}

type empComplet = Employe & Profil// & {sexe: Sexe}

const e1:empComplet = {
    id: 10,
    nom: "toto",
    //sexe: "H"
}

console.log(e1);
