function fadeIn(el, time, timeFunction = "linear") {
  el.style.animation = `fadeIn ${timeFunction} forwards ${time / 1000}s`;
}

function fadeOut(el, time, timeFunction = "linear") {
  el.style.animation = `fadeOut ${timeFunction} forwards ${time / 1000}s`;
}
