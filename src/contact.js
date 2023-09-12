function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactTitleCont = document.createElement("div");
    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact";

    contactTitleCont.appendChild(contactTitle);

    const contactCont = document.createElement("div");
    contactCont.classList.add("contact-container");

    const contactImg = document.createElement("img");
    contactImg.src = "images/contact-img.png";
    contactImg.alt = "Maps view";

    const contactAdress = document.createElement("p");
    contactAdress.textContent = "📍 Brooklyn, NY 11234, USA";

    const contactPhone = document.createElement("p");
    contactPhone.textContent = " 📞 568 965 255 ";

    contactCont.appendChild(contactImg);
    contactCont.appendChild(contactAdress);
    contactCont.appendChild(contactPhone);

    contact.appendChild(contactTitleCont);
    contact.appendChild(contactCont)
    
    return contact
}

export default function displayContact(){
    const mainCont = document.querySelector(".main-content");

    mainCont.textContent = "";
    mainCont.appendChild(createContact());

    return mainCont
}