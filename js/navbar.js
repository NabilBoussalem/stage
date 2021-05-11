/* products */

/* end products */

/* panier */
let panier = document.querySelector(".panier svg")
let contenu = document.querySelector(".panier .contenu");
    r=0
    panier.onclick = function()
    {
        if(r==1)
        {
            contenu.classList.remove('show');
            r = 0;
            return;
        }
        contenu.classList.add('show');
        r=1;
    }
    panier.onclick()

/* end panier */  


/* navbar */

let nav = document.querySelector(".nav-top ul");
let navBtn = document.querySelector(".burger button");

navBtn.onclick =()=>
{
    if(nav.classList.contains("showNav"))
    {
        nav.classList.remove('showNav');
        return;
    }
    nav.classList.add('showNav');
};
/* end navbar */

/* drop down */
let dropDownContainer = document.getElementById("drop-down-container");
let dropDown = document.querySelector(".drop-down");

dropDownContainer.onclick =()=>
{
    dropDown.style.height= dropDown.style.height == "125px"? 0 :"125px";
}
/* end drop down */