document.getElementById().addEventListener("click", sendStats);

function sendStats() {
  // let date = new Date(Date.now() + 86400e3);
  // date = date.toUTCString();

  document.cookie = "test=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
}
