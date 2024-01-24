let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}


function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}











