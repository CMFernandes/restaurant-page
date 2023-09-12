function createMenuCard(name, ingredient, src){
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const ingredients = document.createElement("p");
    ingredients.textContent = ingredient;

    const foodImg = document.createElement("img")
    foodImg.src = `/src/images/${src}.jpg`;

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

    menuCards.appendChild(createMenuCard("Ultimate Burger", "Patty, cheddar cheese, lettuce, bacon, secret sauce and fried onions.","ultimate"))
    menuCards.appendChild(createMenuCard("Premium Burger","Patty, caramelised red onions, white sauce, cream cheese and bacon.", "premium"))
    menuCards.appendChild(createMenuCard("Cheesy Burguer","Patty, cheddar cheese, cheese sauce and onions.","cheese"))
    menuCards.appendChild(createMenuCard("Fries","Just the best homemade french fries.","fries"))
    
    menu.appendChild(menuTitle);
    menu.appendChild(menuCards);
    
    return menu
}

export default function displayMenu(){
    const mainCont = document.querySelector(".main-content")
    
    mainCont.textContent = "";
    mainCont.appendChild(createMenu());

}