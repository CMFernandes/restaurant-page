import displayHome from "./home";

function createNav() {
    const nav = document.createElement("div")
    nav.classList.add("navbar")

    const leftNav = document.createElement("div")
    leftNav.classList.add("left-nav")
    const restaurantName = document.createElement("h1")
    restaurantName.classList.add("restaurant-name")
    restaurantName.textContent = "Fancy Burger"

    leftNav.appendChild(restaurantName)

    const rightNav = document.createElement("div")
    rightNav.classList.add("right-nav")

    const homeBtn = document.createElement("button")
    homeBtn.classList.add("homeBtn")
    homeBtn.textContent = "Home"

    const menuBtn = document.createElement("button")
    menuBtn.classList.add("menuBtn")
    menuBtn.textContent = "Menu"

    const contactBtn = document.createElement("button")
    contactBtn.classList.add("contactBtn")
    contactBtn.textContent = "Contact"

    rightNav.appendChild(homeBtn)
    rightNav.appendChild(menuBtn)
    rightNav.appendChild(contactBtn)

    nav.appendChild(leftNav)
    nav.appendChild(rightNav)

    return nav
}
 
function createMain(){
    const mainCont = document.createElement("div")
    mainCont.classList.add("main-content")

    return mainCont
}

function createFooter() {
    const footer = document.createElement("footer")
    footer.classList.add("footer")

    const footerPara = document.createElement("p")
    footerPara.textContent = `Copyright © ${new Date().getFullYear()} CMFernandes`
    
    footer.appendChild(footerPara)

    return footer
}

export function webpageInit() {
    const content = document.querySelector("#content")
    content.appendChild(createNav())
    content.appendChild(createMain())
    content.appendChild(createFooter())

    displayHome()
}