const navToggle = document.querySelector('.nav_toggle');
const navLinks = document.querySelectorAll('.nav_link');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const checkBox = document.getElementById('modeCB');

navToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('nav_open');
})

navLinks.forEach(link => {
    link.addEventListener('click', ()=> {
        document.body.classList.remove('nav_open');
    })
})

function check() {
if(checkBox.checked == true){
    document.documentElement.style
    .setProperty('--clr-light', '#fff');
    document.documentElement.style
    .setProperty('--clr-dark', '#303030');
}
else {
    document.documentElement.style
    .setProperty('--clr-dark', '#fff');
    document.documentElement.style
    .setProperty('--clr-light', '#303030');
}
}
