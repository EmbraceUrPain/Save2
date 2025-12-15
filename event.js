let isLight = false;

function darkMode() {
  const body = document.body;
  const btn = document.querySelector(".menu-btn");
  const h1s = document.getElementsByTagName("h1");
  const h3s = document.getElementsByTagName("h3");
  const ps = document.getElementsByTagName("p");

  if (!isLight) {
    /* LIGHT MODE */
    body.style.backgroundColor = "white";

    for (let h of h1s) h.style.color = "black";
    for (let h of h3s) h.style.color = "black";
    for (let p of ps) p.style.color = "black";

    btn.classList.add("dark");   // ICON STATE
    isLight = true;

  } else {
    /* DARK MODE */
    body.style.backgroundColor = "black";

    for (let h of h1s) h.style.color = "#BFBCBB";
    for (let h of h3s) h.style.color = "#BFBCBB";
    for (let p of ps) p.style.color = "#D4D0CF";

    btn.classList.remove("dark"); // ICON GERİ
    isLight = false;
  }
}