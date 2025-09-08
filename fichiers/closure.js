function compteur(){
    let count = 0;
    return function(){
        return ++count;
    }
}

let inc1 = compteur()
console.log(inc1());
console.log(inc1());
console.log(inc1());

let inc2 = compteur()
console.log(inc2());
console.log(inc2());
