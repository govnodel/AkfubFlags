document.querySelectorAll(".flagCell").forEach((el) => {
  el.addEventListener("mouseover", () => {
      let path = el.children[11].textContent;
      document.querySelector("img").src = `/images/flags/${path}.png`;
  });
});