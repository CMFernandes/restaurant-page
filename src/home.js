function createHome(){

    const home = document.createElement("div")
    home.classList.add("home")

    const mainImg = document.createElement("img")
    mainImg.src = "/src/images/restaurant-img.jpg"
    mainImg.alt = "Restaurant"

    const restName = document.createElement("h1")
    restName.textContent = "Fancy Burger"

    const headline = document.createElement("h2")
    headline.classList.add("headline")
    headline.textContent = "Where real burgers are made!"


    home.appendChild(mainImg)
    home.appendChild(restName)
    home.appendChild(headline)

    return home
}

export default function displayHome(){

    const mainCont = document.querySelector(".main-content")
    
    mainCont.textContent = "";
    mainCont.appendChild(createHome());
}