const button = document.querySelector("#scrollButton");
const bg = document.querySelector("#bg");
let scrolling = false;


 window.onscroll= () => {
    console.log(true);
    scrolling = true;
};

/* On apelle la function moins souvent */

setInterval(() => {
    if (scrolling) {
        scrolling = false;
        windowScroll()
    }
},500);


function windowScroll(){

    /* Si on a scroll */
    if(document.documentElement.scrollTop > 20){
        button.style.display = "block";
    }else{
        button.style.display = "none";
    }
}

function scrollToTop(){

    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: 'smooth'
    }        
    );
}


