function createHome(){

    const home = document.createElement("div")
    home.classList.add("home")

    const homeImgCont = document.createElement("div");
    homeImgCont.classList.add("home-img-cont")

    const mainImg = document.createElement("img"); 
    mainImg.src = "images/restaurant-img.jpg"; 
    mainImg.alt = "Restaurant";

    homeImgCont.appendChild(mainImg)
    
    const headlineCont  = document.createElement("div");
    headlineCont.classList.add("headline-cont")

    const restName = document.createElement("h1");
    restName.textContent = "Fancy Burger";

    const headline = document.createElement("h2");
    headline.classList.add("headline");
    headline.textContent = "Where real burgers are made!";

    headlineCont.appendChild(restName);
    headlineCont.appendChild(headline);

    home.appendChild(homeImgCont);
    home.appendChild(headlineCont);

    return home
}

export default function displayHome(){

    const mainCont = document.querySelector(".main-content");
    
    mainCont.textContent = "";
    mainCont.appendChild(createHome());
}