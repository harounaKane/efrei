const qs = (el) => document.querySelector(el);
const API = "https://jsonplaceholder.typicode.com/users";

const user = qs("#users");

async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); 
    if( !res.ok ) throw new Error("Erreur: " + res.status);
    const users = await res.json();

    let textuser = '';
    users.map( user => {
        textuser += `<div class="user">${user.name}</div>`
    });

    user.innerHTML = textuser;
  
}

getUsers();


