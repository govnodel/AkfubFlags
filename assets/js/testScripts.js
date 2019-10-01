$("#test").bind("click", createCookie);

function createCookie() {
  let date = new Date(Date.now() + 86400e3);
  date = date.toUTCString();

  document.cookie = "stats=" + encodeURIComponent("test") + "; path=/";
  alert(document.cookie);
}
