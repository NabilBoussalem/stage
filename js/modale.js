/*---------- Start modale ----------*/
let modale = document.querySelector(".modale");
let categorie = document.querySelector("#categorie");
let device = document.querySelector("#device");


let plus = document.querySelector(".modale .show .caracters .div-1 div .qte button:nth-of-type(2)");
let moin = document.querySelector(".modale .show .caracters .div-1 div .qte button:nth-of-type(1)");
let conteurPrix = document.querySelector(".modale .show .caracters .div-1 div .qte span");
let prix = document.querySelector(".modale .show .prix span:last-of-type");
let total = document.querySelector(".modale .show .caracters .div-1 div p span");


let descriptionTab = document.querySelector(".modale .show .caracters > ul li:first-of-type ");
let detailsTab = document.querySelector(".modale .show .caracters > ul li:last-of-type ");
let slide = document.querySelector(".modale .show .caracters .slide");
/*---------- Sart slide ----------*/

descriptionTab.onclick =()=>
{
    slide.style.margin="0";
    detailsTab.classList.remove("selected");
    descriptionTab.classList.add("selected");
}
detailsTab.onclick =()=>
{
    slide.style.marginLeft="-100%";
    detailsTab.classList.add("selected");
    descriptionTab.classList.remove("selected");
}
/*---------- End slide ----------*/

/*---------- Start prix ----------*/

function facturer()
{
    total.innerHTML = conteurPrix.innerHTML * prix.innerText +"DH";
}

plus.onclick =()=>
{
    let i = conteurPrix.innerHTML;
    conteurPrix.innerHTML = ++i;
    facturer();
}
moin.onclick =()=>
{
    let i = conteurPrix.innerHTML;
    if(i==0) return
    conteurPrix.innerHTML = --i;
    facturer();
}

/* close modale */
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        closeModale.onclick();
    }
};
closeModale = document.querySelector(".modale .content svg");
closeModale.onclick= function()
{
    modale.style.display="none";
    document.body.style.overflow='initial';
}
/* end close modale */
/*---------- End prix ----------*/


/*---------- Start select img ----------*/

let mainImg = document.querySelector("#cadre");
let imgs = document.querySelectorAll(".galleri img");

imgs.forEach(el =>
        el.onclick=()=>
        {
            mainImg.setAttribute("src",el.getAttribute('src'))
        }
    )

/*---------- End select img ----------*/



/*---------- Start show modale ----------*/

let showModal = document.querySelectorAll(".block-9 .main footer p");
showModal.forEach(el =>
    el.onclick =()=>{
        let product = products.filter(res=>res.id == el.getAttribute('id'));
        prix.innerHTML = product[0].offrePrix;
        categorie.innerHTML = product[0].categorie;
        device.innerHTML=product[0].device
        mainImg.setAttribute("src",product[0].imgSource);
        imgs[0].setAttribute("src",product[0].imgSource);
        modale.style.display='block';
        facturer();
        document.body.style.overflow='hidden';
    }
)

/*---------- End show modale ----------*/



/*---------- End modale ----------*/





