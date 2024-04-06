let login = document.querySelector(".user");
let passord = document.querySelector(".password");
const connectionButton = document.querySelector(".loginButton");

connectionButton.addEventListener("click", () => {
  if (login.value === "papa" && passord.value == "papa") {
    window.location.href = './anniversairePage.html';
  } else {
    alert("erreur");
  }
});
