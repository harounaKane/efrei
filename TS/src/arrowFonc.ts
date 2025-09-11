const somme = (s:number[]):number => s.reduce((a, v) => a+v, 0); 
const t = [5, 7, 10, 2];
const res = somme(t);

console.log( res );
