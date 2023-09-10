import displayMenu from "./menu.js"
import {webpageInit} from "./webpage.js"


//console.log(createNav)
webpageInit()

const menuBtn = document.querySelector(".menu")

menuBtn.addEventListener('click', displayMenu)



