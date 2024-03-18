import ultimateImg from './images/ultimate.jpg';
import premiumImg from './images/premium.jpg';
import cheeseImg from './images/cheese.jpg';
import friesImg from './images/fries.jpg';



function createMenuCard(name, ingredient, src){
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const ingredients = document.createElement("p");
    ingredients.textContent = ingredient;

    const foodImg = document.createElement("img")
    foodImg.src = `${src}`;

    menuCard.appendChild(foodName);
    menuCard.appendChild(ingredients);
    menuCard.appendChild(foodImg)

    return menuCard
}

function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu")

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";

    const menuCards = document.createElement("div")
    menuCards.classList.add("menu-cards")

    menuCards.appendChild(createMenuCard("Ultimate Burger", "Patty, cheddar cheese, lettuce, bacon, secret sauce and fried onions.",ultimateImg))
    menuCards.appendChild(createMenuCard("Premium Burger","Patty, caramelised red onions, white sauce, cream cheese and bacon.", premiumImg))
    menuCards.appendChild(createMenuCard("Cheesy Burguer","Patty, cheddar cheese, cheese sauce and onions.",cheeseImg))
    menuCards.appendChild(createMenuCard("Fries","Just the best homemade french fries.",friesImg))
    
    menu.appendChild(menuTitle);
    menu.appendChild(menuCards);
    
    return menu
}

export default function displayMenu(){
    const mainCont = document.querySelector(".main-content")
    
    mainCont.textContent = "";
    mainCont.appendChild(createMenu());

}