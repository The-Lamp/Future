// auth.js

// Authentication logic
(function () {
  const errorBoxStyle = `
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 0, 0, 0.8);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 14px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    animation: fade-in-out 3s forwards;
  `;

  const style = document.createElement("style");
  style.textContent = `
    @keyframes fade-in-out {
      0% { opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // Display error animation
  function showError(message) {
    const errorBox = document.createElement("div");
    errorBox.textContent = message;
    errorBox.setAttribute("style", errorBoxStyle);
    document.body.appendChild(errorBox);
    setTimeout(() => {
      errorBox.remove();
    }, 3000);
  }

  // Check if user is authenticated
  if (!sessionStorage.getItem('authenticated')) {
    showError("You need to enter the password first!");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000); // Redirect after showing error
  }
})();
