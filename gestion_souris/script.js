let rectangle = document.getElementsByClassName("rectangle")[0];

document.getElementById("toggle-rectangle").addEventListener('click', () => {
    console.log(rectangle);

    rectangle.classList.toggle('hidden');
});

rectangle.addEventListener('mouseover', () => {
    rectangle.classList.add("important");
});

rectangle.addEventListener('mouseleave', () => {
    rectangle.classList.remove("important");
});

rectangle.addEventListener('dblclick', () => {
    rectangle.classList.toggle("good");
});