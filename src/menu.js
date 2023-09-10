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

    menu.appendChild(createMenuCard("Ultimate Burger", "Patty, cheddar cheese, baccon, secret sauce and fried onion","ultimate"))

    return menu
}

export default function displayMenu(){
    const mainCont = document.querySelector(".main-content")
    
    mainCont.textContent = "";
    mainCont.appendChild(createMenu());

}