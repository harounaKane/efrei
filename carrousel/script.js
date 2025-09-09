const qs = (el) => document.querySelector(el);

let imageEl = qs("#slider img");
let figcaption = qs("#slider figcaption");
let timer = null;

const images = [
  { path: "img/image.jpg", titre: "efrei première img" },
  { path: "img/image.png", titre: "efrei seconde img" },
  { path: "img/i3.png", titre: "efrei img 3" },
  { path: "img/i4.jpg", titre: "efrei img 4" },
];

let pos = 0;

qs("#slider-next").addEventListener("click", avancer);
qs("#slider-previous").addEventListener("click", reculer)
qs("#slider-toggle").addEventListener("click", play);
qs("#slider-random").addEventListener("click", random);

qs(".toolbar-toggle").addEventListener("click", () => {
  qs("#toolbar").classList.toggle("d-none");
});

document.addEventListener("keyup", (e) => {
    switch( e.key ){
        case "ArrowLeft":
            reculer();
            break;
        case "ArrowRight":
            avancer();
            break;
        case " ":
            play();
            break;
        case "r":
        case "R":
            random();
            break;
    }    
})

refresh();

function random(){
    const POSACTUELLE = pos;

    while(POSACTUELLE == pos){
        pos = Math.floor( Math.random() * images.length );
    }

    // do{
    //     pos = Math.floor( Math.random() * images.length );
    // }while(POSACTUELLE == pos);

    refresh();
}

function play(){
    qs("#slider-toggle i").classList.toggle("fa-play");
    qs("#slider-toggle i").classList.toggle("fa-pause");

    if( timer == null  ){
        timer = setInterval(avancer, 1000);
    }

    if( qs("#slider-toggle i").classList.contains("fa-play") ){
        clearInterval(timer);
        timer = null;
    } 
}

function avancer() {
  pos++;
  if (pos >= images.length) {
    pos = 0;
  }

  refresh();

}
function reculer(){
    pos--;
    if( pos < 0 ){
        pos = images.length - 1;
    }

    refresh();
}

function refresh() {
  imageEl.src = images[pos].path;
  figcaption.innerHTML = images[pos].titre;
}
