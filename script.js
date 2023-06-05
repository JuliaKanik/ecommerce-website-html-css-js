//to make the navbar visible after clicking the icon

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

// to make the cross closs the navbar after clicking
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}