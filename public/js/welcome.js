fadeIn(document.querySelector("p"), 700, "ease-in-out");

setTimeout(() => {
    fadeOut(document.querySelector("p"), 500, "ease-in-out");
    document.querySelector("body").style.animation =
      "color 0.5s ease-in-out forwards";
    
    setTimeout(() => window.location.replace("/"), 500)
}, 2000);