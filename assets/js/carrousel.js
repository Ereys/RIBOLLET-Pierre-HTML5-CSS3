// On recupere les elements du carrousel

const carrousel = document.querySelector("#_carrousel")


let father = document.querySelector("#father")
let slider = father.children

// On recupere les fleches
const fleche_gauche = carrousel.querySelector("#nav-gauche")
const fleche_droite = carrousel.querySelector("#nav-droite")

const time_interval = 10000



let timer = setInterval(slideNext,time_interval)
let compteur = 0 
let bound = slider.length

fleche_gauche.addEventListener("click", slideBefore)
fleche_droite.addEventListener("click", slideNext)


// Si on appui sur un fleche -> on swap

function slideNext(){
    clearInterval(timer)
    compteur++
    if(compteur == bound){
        compteur = 0
    }
    let decal =   -slider.item(compteur).offsetWidth*compteur
    father.style.transform = `translatex(${decal}px)`
    timer = setInterval(slideNext,time_interval)
}

function slideBefore(){
    clearInterval(timer)
    compteur--
    if(compteur < 0){
        compteur = bound-1
    }
    let decal =  -slider.item(compteur).offsetWidth*compteur
    father.style.transform = `translatex(${decal}px)`
    timer = setInterval(slideNext,time_interval)
}


// timer au bout de  sec sa change droite