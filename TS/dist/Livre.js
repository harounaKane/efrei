"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monLivre = {
    titre: "La Géopolitique",
    auteur: "pascal ...",
    disponible: true
};
function infoLivre(l) {
    const dispo = l.disponible ? "livre disponible" : "ivre pas dispo";
    console.log(`
        Titre: ${l.titre}
        Auteur: ${l.auteur}
        Dispo: ${dispo}
        `);
}
infoLivre(monLivre);
//# sourceMappingURL=Livre.js.map