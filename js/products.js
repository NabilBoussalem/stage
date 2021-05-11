class Products
{
    constructor(produit)
    {
        this.id = produit.id;
        this.status = produit.status;
        this.img = produit.imgSource;
        this.device = produit.device;
        this.originPrix = produit.prix;
        this.offreStatus = produit.offreStatus;
        this.offrePrix = produit.offrePrix;
        this.like = produit.like
    }

    header()
    {
        return (
            `<header>
                <p class=${this.status}>
                    <span>
                        ${this.status}
                    </span>
                </p>
                <svg class=${this.like} xmlns="http://www.w3.org/2000/svg" width="21.332" height="20" viewBox="0 0 21.332 20">
                    <g id="like" transform="translate(0 0)">
                        <path id="Tracé_628" data-name="Tracé 628" d="M10.667,3.664l-.956-.983A5.008,5.008,0,0,0,1.867,4.07c-.7,1.364-.855,3.333.419,5.846,1.227,2.42,3.779,5.318,8.381,8.476,4.6-3.157,7.153-6.056,8.381-8.476,1.273-2.515,1.117-4.483.419-5.846A5.008,5.008,0,0,0,11.623,2.68Zm0,16.336C-9.777,6.491,4.372-4.053,10.432,1.524c.08.073.159.149.235.228q.113-.118.235-.227C16.96-4.056,31.11,6.489,10.667,20Z" transform="translate(0 0)" fill-rule="evenodd"/>
                    </g>
                </svg>
            </header>`
        )
    }

    
    main()
    {
        /*--- img ---*/
        let main = document.createElement("main");
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("outer-wrapper");
        main.appendChild(imgContainer);

        let frame = document.createElement("div");
        frame.classList.add("frame");
        imgContainer.appendChild(frame);

        let img = document.createElement("img");
        img.setAttribute("src",this.img);
        frame.appendChild(img);
        /*--- end img ---*/


        /*--- h3 ---*/
        let h3 = document.createElement('h3');
        h3.append(this.device);
        h3.classList.add("device")
        main.appendChild(h3);
        /*--- end h3 ---*/


        /*--- prix ---*/
        let prix = document.createElement("p");
        main.appendChild(prix);


        let originPrix = document.createElement("span");
        originPrix.append(this.originPrix + " DH");
        originPrix.classList.add(this.offreStatus)
        prix.appendChild(originPrix);


        let offrePrix = document.createElement("span");
        offrePrix.append(this.offrePrix + " DH");
        prix.appendChild(offrePrix);


        /*--- end prix ---*/
        return main;
    }

    footer()
    {
        return (`<footer>
                    <div>
                        <button class="black-btn">
                            <img src="assets/icon/slider/shopping-bag-line.svg" alt="">
                            <span> Add To Cart</span>
                        </button>
                        <p id=${this.id}>
                            <span>View Details</span> <img src="assets/icon/slider/arrow-right.svg" alt="">
                        </p>
                    </div>
                </footer>`);
    }

    generate()
    {
        let articles=document.createElement("article");
        articles.innerHTML = this.header();
        articles.appendChild(this.main());
        articles.innerHTML += (this.footer());
        

        let gallery = document.querySelector(".block-9 .main main");
        gallery.appendChild(articles)
    }
}


let products=[
    {id:1, like:"notlike" , status:'sale'  ,categorie:"Samrtphone" , imgSource:"assets/img/block-9/iphone-12-pro.jpg"    , device:"iPhon 12 Pro Max"         , prix:10000    , offreStatus:"offre", offrePrix:9899},
    {id:2, like:"like" , status:'new'   ,categorie:"Samrtphone" , imgSource:"assets/img/block-9/Huawei-Watch-GT-2.jpg", device:"Huawei Watch GT 2"        , prix:2999     , offreStatus:"none", offrePrix:2999},
    {id:3, like:"notlike" , status:"none"  ,categorie:"Samrtphone" , imgSource:"assets/img/block-9/huawei_p40_pro.jpg"   , device:"Huawei P40 Pro"           , prix:7549     , offreStatus:"none", offrePrix:7549},
    {id:4, like:"notlike" , status:"none"  ,categorie:"Samrtphone" , imgSource:"assets/img/block-9/galaxy-z-fold-2.jpg"  , device:"Samsung Galaxy Z Fold 2"  , prix:18000    , offreStatus:"none", offrePrix:9899},
    
    {id:5, like:"like" , status:'new'   ,categorie:"Samrtphone" , imgSource:"assets/img/block-9/Huawei-MateBook-13.png"       , device:"Huawei MateBook 13"       , prix:1399     , offreStatus:"none", offrePrix:1399},
    {id:6, like:"notlike" , status:'offre' ,categorie:"Samrtphone" , imgSource:"assets/img/block-9/Galaxy-Note-20-concept.png"   , device:"Samsaung Galaxy Note 20"  , prix:11000    , offreStatus:"offre", offrePrix:10000},
    {id:7, like:"like" , status:'new'   ,categorie:"Samrtphone" , imgSource:"assets/img/block-9/Apple-Watch.png"              , device:"Apple Watch Serie 6"      , prix:8000     , offreStatus:"none", offrePrix:8000 },
    {id:8, like:"notlike" , status:"none"  ,categorie:"Samrtphone" , imgSource:"assets/img/block-9/samasung-galaxy-tab-e.png"    , device:"samasung Galaxy Tab E"    , prix:2500     , offreStatus:"none", offrePrix:2500 },
    
    {id:9, like:"notlike" , status:'new'   ,categorie:"Samrtphone" , imgSource:"assets/img/block-9/Macbook-pro-12.png"           , device:"Macbook Pro 12"       , prix:10000, offreStatus:"offre", offrePrix:9899},
    {id:10, like:"like" , status:"none" ,categorie:"Samrtphone" , imgSource:"assets/img/block-9/ipad-pro12.png"               , device:"iPad Pro 12.9"        , prix:10000, offreStatus:"offre", offrePrix:9899},
    {id:11, like:"notlike" , status:'new'  ,categorie:"Samrtphone" , imgSource:"assets/img/block-9/oppo-find-x-pro.png"          , device:"iPhon 12 Pro Max"     , prix:10000, offreStatus:"offre", offrePrix:9899},
    {id:12, like:"notlike" , status:"none" ,categorie:"Samrtphone" , imgSource:"assets/img/block-9/Xiaomi-Mi-10T-Pro-5G.png"     , device:"Xiaomi Mi 10T Pro 5G" , prix:10000, offreStatus:"offre", offrePrix:9899}
]



products.forEach(el=>
    {
        let article = new Products(el);
        article.generate()
    })