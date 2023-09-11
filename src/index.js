import displayHome from "./home.js"
import displayContact from "./contact.js"
import displayMenu from "./menu.js"
import {webpageInit} from "./webpage.js"


webpageInit()

const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener('click', displayMenu);

const contactBtn = document.querySelector(".contactBtn");
contactBtn.addEventListener('click', displayContact);

const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener('click', displayHome);


