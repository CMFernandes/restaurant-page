(()=>{"use strict";function e(){const e=document.querySelector(".main-content");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("div");t.classList.add("home-img-cont");const n=document.createElement("img");n.src="/src/images/restaurant-img.jpg",n.alt="Restaurant",t.appendChild(n);const c=document.createElement("div");c.classList.add("headline-cont");const d=document.createElement("h1");d.textContent="Fancy Burger";const a=document.createElement("h2");return a.classList.add("headline"),a.textContent="Where real burgers are made!",c.appendChild(d),c.appendChild(a),e.appendChild(t),e.appendChild(c),e}())}function t(e,t,n){const c=document.createElement("div");c.classList.add("menu-card");const d=document.createElement("h2");d.textContent=e;const a=document.createElement("p");a.textContent=t;const o=document.createElement("img");return o.src=`/src/images/${n}.jpg`,c.appendChild(d),c.appendChild(a),c.appendChild(o),c}!function(){const t=document.querySelector("#content");t.appendChild(function(){const e=document.createElement("div");e.classList.add("navbar");const t=document.createElement("div");t.classList.add("left-nav");const n=document.createElement("h1");n.classList.add("restaurant-name"),n.textContent="Fancy Burger",t.appendChild(n);const c=document.createElement("div");c.classList.add("right-nav");const d=document.createElement("button");d.classList.add("homeBtn"),d.textContent="Home";const a=document.createElement("button");a.classList.add("menuBtn"),a.textContent="Menu";const o=document.createElement("button");return o.classList.add("contactBtn"),o.textContent="Contact",c.appendChild(d),c.appendChild(a),c.appendChild(o),e.appendChild(t),e.appendChild(c),e}()),t.appendChild(function(){const e=document.createElement("div");return e.classList.add("main-content"),e}()),t.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");return t.textContent=`Copyright © ${(new Date).getFullYear()} CMFernandes`,e.appendChild(t),e}()),e()}(),document.querySelector(".menuBtn").addEventListener("click",(function(){const e=document.querySelector(".main-content");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const n=document.createElement("h1");n.textContent="Menu";const c=document.createElement("div");return c.classList.add("menu-cards"),c.appendChild(t("Ultimate Burger","Patty, cheddar cheese, lettuce, bacon, secret sauce and fried onions.","ultimate")),c.appendChild(t("Premium Burger","Patty, caramelised red onions, white sauce, cream cheese and bacon.","premium")),c.appendChild(t("Cheesy Burguer","Patty, cheddar cheese, cheese sauce and onions.","cheese")),c.appendChild(t("Fries","Just the best homemade french fries.","fries")),e.appendChild(n),e.appendChild(c),e}())})),document.querySelector(".contactBtn").addEventListener("click",(function(){const e=document.querySelector(".main-content");return e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("div"),n=document.createElement("h1");n.textContent="Contact",t.appendChild(n);const c=document.createElement("div");c.classList.add("contact-container");const d=document.createElement("img");d.src="/src/images/contact-img.png",d.alt="Maps view";const a=document.createElement("p");a.textContent="📍 Brooklyn, NY 11234, USA";const o=document.createElement("p");return o.textContent=" 📞 568 965 255 ",c.appendChild(d),c.appendChild(a),c.appendChild(o),e.appendChild(t),e.appendChild(c),e}()),e})),document.querySelector(".homeBtn").addEventListener("click",e)})();