// auth.js
(function () {
  // Check if user is authenticated
  if (!sessionStorage.getItem('authenticated')) {
    alert("You need to enter the password first!");
    window.location.href = "index.html";
  }
})();
