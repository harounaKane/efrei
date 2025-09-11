const qs = (el) => document.querySelector(el);
const qa = (el) => document.querySelectorAll(el);
const API = "https://jsonplaceholder.typicode.com";

const userContent = qs("#users");
const postContent = qs(".postContent");

async function getUsers(){
    try{
        const res = await fetch(`${API}/users`); 
        if( !res.ok ) throw new Error("Erreur: " + res.status);
        const users = await res.json();

        users.forEach( user => {
            const div = document.createElement("div");
            div.className = "user";
            div.textContent = user.name;
            
            userContent.appendChild(div);

            div.addEventListener("click", () => {
                qa(".user").forEach( u => u.classList.remove("selected"));
                div.classList.add("selected");

                userPosts(user);
            });        
        });
    }catch(e){userContent.innerHTML = `Erreur chargement user : ${e}`}
}


async function userPosts(user) {
    console.log(user);
    qs("#user").innerHTML = user.name;

    try{
        const res = await fetch(`${API}/posts?userId=${user.id}`);
        if( !res.ok ) throw new Error("Erreur HTTP : " + res.status);
        const posts = await res.json();

        postContent.innerHTML = "";
        if( posts.length == 0 ){postContent.innerHTML = "Pas de postes"; return; }
        qs("#user").innerHTML = user.name;

        posts
        .sort( (a, b) => a.title.localeCompare(b.title) )
        .forEach( p => {
            const div = document.createElement("div");
            div.className = "post";
            div.innerHTML = `<h3>${p.title}</h3><p>${p.body}</p>`;

            postContent.appendChild(div);

            div.addEventListener("click", () => postComments(user, p));
        });
        
    }catch(e){
        postContent.innerHTML = "Erreur :" + e;
    }
}

async function postComments(user, post) {
    try{
        const res = await fetch(`${API}/comments?postId=${post.id}`);
        if( !res.ok ) throw new Error("Erreur http: " + res.status);

        const comments = await res.json();
        
        postContent.innerHTML = "";
        qs("#post").innerHTML = `${post.title}<p>Auteur : ${user.name}</p>`;
        if( comments.length == 0 ){postContent.innerHTML = "Pas de postes"; return; }

        comments.forEach( c => {
            const div = document.createElement("div");
            div.className = "post";
            div.innerHTML = `<h4>${c.name}</h4><p>${c.body}</p>`;

            postContent.appendChild(div);
        });

    }catch(e){}
    
}

getUsers();


