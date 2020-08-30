let parallax = document.querySelector('.parallax');
let titulo = document.querySelector('.titulo')

function scrollparallax() {
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * -0.5 + 'px)'
    titulo.style.transform = 'translateY(' + scrollTop * 0.2 + 'px)'
}

window.addEventListener('scroll', scrollparallax);