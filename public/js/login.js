if (!document.querySelector(".errors"))
  document.querySelector(".container").style.animation =
    "begin 0.6s ease-in-out forwards";

document.querySelector("button").addEventListener("click", () => {
  let form = document.querySelector(".container");

  form.style.animation = "end 0.4s ease-in-out forwards";
  form.style.pointerEvents = "none";

  setTimeout(() => document.querySelector("form").submit(), 400);
});
