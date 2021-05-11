/* main slider */
let li = document.querySelector(".header .slider ul li:first-of-type");
let btnPrev = document.querySelector("#prev");
let btnNext = document.querySelector("#next");
let conteur = document.querySelectorAll(".conteur-container ul li");
let margin=0;
let i = 0;


let check = ()=>
{
    btnNext.style.visibility= margin>= 66 ? "hidden" : "visible";
    btnPrev.style.visibility= margin <= 0 ? "hidden" : "visible";
    conteur.forEach(c=> c.classList.remove("conteur"))
    conteur[i].classList.add("conteur");
}
btnNext.onclick =()=>
{
    margin +=33;
    li.style.marginLeft=-margin+'%';
    i++;
    check()
}
btnPrev.onclick =()=>
{
    margin -=33;
    li.style.marginLeft=-margin+'%';
    i--;
    check();
}
check();

/* End main slider*/



/* new arrival slider */

let slider = document.querySelector(".block-8 .container ul")
let ml =100;

setInterval(() => {
    newArrivalSlider()
}, 6000);

function newArrivalSlider()
{
    ml = ml >= 300 ? 0 : ml
    slider.style.marginLeft= -ml+"%";
    ml +=100;
}



/* End new arrival slider */