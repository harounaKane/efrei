const qs = (elem) => document.querySelector(elem);
const qsa = (elem) => Array.from( document.querySelectorAll(elem) );

/**********
 * VARIABLES
 ***********/
const joueurs = [];
let nombreBille = 15;
const billeInitiale = nombreBille;
let coupPrecedent; 
let coup;
let joueurActif = 0;

qs("#submit").addEventListener("click", (e) => {
    e.preventDefault();

    // tester la validité des données

    joueurs.push(
        {prenom: qs("#prenom1").value, nom: qs("#nom1").value}, 
        {prenom: qs("#prenom2").value, nom: qs("#nom2").value}
    );

    qs("#form").classList.add("d-none");
    qs("#jeu").classList.remove("d-none");

    info()
});

qsa("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        coup = e.target.getAttribute("data-bille");
        nombreBille -= coup;
        coupPrecedent = coup;

        joueurActif = (joueurActif + 1) % joueurs.length;

        e.target.setAttribute("disabled", true);

        qsa("button").forEach(btnAct => { 
            if( btnAct.getAttribute("data-bille") !== coupPrecedent ){
                btnAct.removeAttribute("disabled")
            }

            if( nombreBille < btnAct.getAttribute("data-bille") )
                btnAct.setAttribute("disabled", true);
        });

        info();
    });
});

function info(){
    let image = "";
    for(let i=0; i<nombreBille; i++)
        image += "🥎";

    qs("#billes").innerHTML = image;

    qs("#joueurActif").innerHTML = joueurs[joueurActif].prenom;
    qs("#cp").innerHTML = `Coup précédent ${coupPrecedent}`;
    qs("#reste").innerHTML = `Billes restant: ${nombreBille}`

    barreProgress();
}

function barreProgress(){
    let p = (nombreBille/billeInitiale ) * 100;

    qs("#progression").style.width = `${p}%`; 

    gagnant();
}

function gagnant(){
    if( (nombreBille == 0) || (coupPrecedent == 1 && nombreBille == 1) ){
        qs("#fin").classList.remove("d-none");
        qs("#gagnant").innerHTML = joueurs[joueurActif].prenom;
    }
}

