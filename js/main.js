const hg = document.querySelector('.parallax__hg')
const mg = document.querySelector('.parallax__mg')
const vg = document.querySelector('.parallax__vg')
const title = document.querySelector('.parallax__title')
const btn = document.querySelector('.menu__burger')

window.addEventListener('scroll', function(){
    let value = window.scrollY

    hg.style.transform = 'translate3d(0px,'+value * 0.03 +'%'+', 0px)'
    mg.style.transform = 'translate3d(0px,'+-value * 0.012 +'%'+', 0px)'
    vg.style.transform = 'translate3d(0px,'+value * 0.005 +'%'+', 0px)'
    title.style.opacity = 1 - value / 800
})

btn.addEventListener('click', function(e){
    document.querySelector('.menu__burger').classList.toggle('active')
    document.querySelector('.menu').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
})

window.onload = function(){
    let preloader = document.querySelector('.preloader')
    preloader.style.display = 'none'
}

