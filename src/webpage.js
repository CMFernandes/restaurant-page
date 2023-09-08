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

    const aboutBtn = document.createElement("button")
    aboutBtn.classList.add("about-btn")
    aboutBtn.textContent = "About us"

    const menuBtn = document.createElement("button")
    menuBtn.classList.add("menu-btn")
    menuBtn.textContent = "Menu"

    const contactBtn = document.createElement("button")
    contactBtn.classList.add("contact-btn")
    contactBtn.textContent = "Contact"

    rightNav.appendChild(aboutBtn)
    rightNav.appendChild(menuBtn)
    rightNav.appendChild(contactBtn)

    nav.appendChild(leftNav)
    nav.appendChild(rightNav)
    
    return nav
}
 
export function webpageInit() {
    const content = document.querySelector("#content")
    content.appendChild(createNav())

}