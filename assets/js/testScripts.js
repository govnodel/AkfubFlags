document.getElementById("button").addEventListener("click", sendStats);

function sendStats() {
  // let date = new Date(Date.now() + 86400e3);
  // date = date.toUTCString();

  document.cookie = "testT=John Smith; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/";
}
