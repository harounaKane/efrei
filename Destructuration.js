let cours = {
    langages: {c1: "js", c2: "Java"},
    ecole: "efrei",
    etudiants: ["toto", "tata"]
}

const {langages: 
    {c2} 
} = cours;


const {etudiants: [p1]} = cours;

console.log(p1);
