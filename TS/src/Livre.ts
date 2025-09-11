interface Livre{
    titre:string,
    auteur:string,
    disponible:boolean
}

const monLivre:Livre = {
    titre: "La Géopolitique",
    auteur: "pascal ...",
    disponible: true
}

function infoLivre(l:Livre):void{
    const dispo = l.disponible ? "livre disponible"  : "ivre pas dispo";

    console.log(`
        Titre: ${l.titre}
        Auteur: ${l.auteur}
        Dispo: ${dispo}
        `);
}

infoLivre(monLivre);