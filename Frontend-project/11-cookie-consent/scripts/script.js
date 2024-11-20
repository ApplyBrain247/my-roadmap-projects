const popup = document.getElementById("cookie-popup");

document
  .getElementById("accept-cookies")
  .addEventListener("click", acceptCookies);

if (!checkCookieConsent()) {
  showCookiePopup();
}

function acceptCookies() {
  popup.style.display = "none";
  localStorage.setItem("cookieConsent", "true");
}

function checkCookieConsent() {
  return localStorage.getItem("cookieConsent") === "true";
}

function showCookiePopup() {
  popup.style.display = "block";
}
