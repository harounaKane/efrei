const qs = (elem) => document.querySelector(elem);
const qsa = (elem) => Array.from( document.querySelectorAll(elem) );

/**********
 * VARIABLES
 ***********/
const joueurs = [];
let nombreBille = 10;
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
    qs("#joueurActif").innerHTML = joueurs[joueurActif].prenom;
    qs("#cp").innerHTML = `Coup précédent ${coupPrecedent}`;
    qs("#reste").innerHTML = `Billes restant: ${nombreBille}`
}
