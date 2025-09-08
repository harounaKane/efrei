const qs = (el) => document.querySelector(el);

const images = [
    {path: "img/image.jpg", titre: "efrei première img"},
    {path: "img/image.png", titre: "efrei seconde img"}
];

let pos = 0;

qs("#slider-next").addEventListener('click', avancer);

qs(".toolbar-toggle").addEventListener("click", () => {
    qs("#toolbar").classList.toggle("d-none");
});



function avancer(){
    pos++;
    if( pos >= images.length ){
        pos = 0;
    }

    console.log(images[pos]);
}

