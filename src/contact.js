function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactImg = document.createElement("img");
    contactImg.src = "/src/images/contact-img.png";
    contactImg.alt = "Maps view";

    const contactAdress = document.createElement("p");
    contactAdress.textContent = "📍 Brooklyn, NY 11234, USA";

    const contactPhone = document.createElement("p");
    contactPhone.textContent = " 📞 568 965 255 ";

    contact.appendChild(contactImg);
    contact.appendChild(contactAdress);
    contact.appendChild(contactPhone);

    return contact
}

export default function displayContact(){
    const mainCont = document.querySelector(".main-content");

    mainCont.textContent = "";
    mainCont.appendChild(createContact());

    return mainCont
}