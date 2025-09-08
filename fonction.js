function additioner(a, b, ...c){
    let somme = a + b;
    
    for(let i=0; i < c.length; i++)
        somme+= c[i];
    
    return somme;
}

const tab = [10, 50, 70, 100];

const [x, ...tab2] = tab;

// console.log(x);
// console.log(tab2);


const t1 = [2, 5, 17, 20];
const t2 = ["toto", true];

// const t3 = [...t1, "toto", true, false];
// console.log(t3);

const prenom = "toto";

console.log( `
    bonjour 
        ${prenom}` );
