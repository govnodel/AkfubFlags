const first = document.getElementById("first");
const second = document.getElementById("second");
const profile = document.getElementById("profile");
const profileButton = document.getElementById("openProfile");
const sliderCircle = document.getElementById("sliderCircle");

const into = "into ease-in-out forwards 1s";
const openProfile = "openProfile ease-in-out forwards 0.4s";
const closeProfile = "closeProfile ease-in-out forwards 0.6s";
const openProfileButton = "openProfileButton ease-in-out forwards 0.4s";
const closeProfileButton = "closeProfileButton ease-in-out forwards 0.6s";

let opened = false;

let currentPage = document.getElementById("page1");

// let avatar = "";
// draw(avatar, document.getElementById("avatar"));

document.getElementById("scroll").addEventListener("click", () => {
  first.style.animation = into;
  second.style.animation = into;

  window.scroll({
    top: second.offsetTop,
    behavior: "smooth",
  });

  // sessionStorage.setItem("reload", "1");
});

document.getElementById("openProfile").addEventListener("click", () => {
  if (opened) {
    fadeOut(profile.children[0].children[0], 600);
    fadeOut(profile.children[1], 600);
    profile.style.animation = closeProfile;
    profileButton.style.animation = closeProfileButton;

    opened = false;
  } else {
    fadeIn(profile.children[0].children[0], 400);
    fadeIn(profile.children[1], 400);
    profile.style.animation = openProfile;
    profileButton.style.animation = openProfileButton;

    opened = true;
  }
});

document.querySelectorAll("#sliders > svg").forEach((el) => {
  el.addEventListener("click", (event) => {
    currentPage.style.display = "none";
    let element = document.getElementById(
      `page${event.currentTarget.id.replace("slider", "")}`
    );

    element.style.display = "block";

    fadeIn(element, 300);

    sliderCircle.style.animation = "";

    if (element.id + "" != currentPage.id + "") {
      fadeIn(sliderCircle, 300);
    }

    currentPage = document.getElementById(
      `page${event.currentTarget.id.replace("slider", "")}`
    );

    event.currentTarget.appendChild(sliderCircle);
  });
});

if (document.getElementById("exit")) {
  document.getElementById("exit").addEventListener("click", () => {
    fadeOut(document.getElementById("exit"), 200);
    setTimeout(() => {
      document.getElementById("exitForm").submit();
    }, 200);
  });
}

document.getElementById("start").addEventListener("click", () => {
  fadeOut(first, 200);
  fadeOut(second, 200);
  setTimeout(() => {
    document.getElementById("startForm").submit();
  }, 280);
});
