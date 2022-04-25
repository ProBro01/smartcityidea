
var infoblock1 = document.querySelector(".information-block1")
var infoblock2 = document.querySelector(".information-block2")
window.addEventListener('scroll', (event) => {
    // backgroundimg.style.width = `${window.innerWidth - window.scrollY}px`
    if(window.scrollY - 400 < 200){
        infoblock1.style.left = `${window.scrollY - 400}px`
    }
    if(1000-window.scrollY > 387 ){
        infoblock2.style.left = `${1000 - window.scrollY}px`
    }
})
