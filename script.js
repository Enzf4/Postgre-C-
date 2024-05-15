window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let lastScrollTop = 0;
let navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if (scrollTop > lastScrollTop) {
    navbar.classList.add('hide');
} else {
    navbar.classList.remove('hide');
}

lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


let modal = document.getElementById('modal');
let img = document.getElementById('img');
let modalImg = document.getElementById("img01");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    document.body.classList.add('disable-scroll');
    
}

let span = document.getElementsByClassName("close")[0];
let nav = document.querySelector('nav');

span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove('disable-scroll');
    nav.style.display = 'flex';
}

let container = document.querySelector('.install-container');
    images = container.querySelectorAll('img');


images.forEach(img => {
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    document.body.classList.add('disable-scroll');
    nav.style.display = 'none';
}
}); 

