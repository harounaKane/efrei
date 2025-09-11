interface Article{
    libelle:string,
    prix:number,
    stock:number
}

let arti = {
    libelle: "souris",
    prix: 75,
    aff: function(){}
}

const art1:Article = {
    libelle: "pc",
    prix: 750,
    stock: 10
}
const art2:Article = {
    libelle: "clavier",
    prix: 50,
    stock: 10
}

let tabArt:Article[] = [art1, art2];

console.log(tabArt);
