function checkCookieConsent() {
    return localStorage.getItem("cookieConsent") === "true";
  }
  
  function showCookiePopup() {
    const popup = document.getElementById("cookie-popup");
    popup.style.display = "flex";
  }
   
  function acceptCookies() {
    localStorage.setItem("cookieConsent", "true");
    const popup = document.getElementById("cookie-popup");
    popup.style.display = "none";
  }
  
  document
    .getElementById("accept-cookies")
    .addEventListener("click", acceptCookies);
  
  if (!checkCookieConsent()) {
    showCookiePopup();
  }
  