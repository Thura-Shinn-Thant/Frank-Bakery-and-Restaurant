// const breadButton = document.querySelector(".red-velvet");
// breadButton.addEventListener("click", () => {
//   let body = document.body;
//   body.style.display = "none";
//   let breadDiv = document.createElement("div");
//   breadDiv.classList.id = "bread-div";
//   breadDiv.innerText = "This is the replacement content.";
//   div1.parentNode.replaceChild(breadDiv, body);
//   body.appendChild(breadDiv);
// });
// itemSelector.addEventListener("click", () => {
//   const bread = document.createElement("div");
//   bread.id = "bread-element";
//   bread.innerHTML = "<h1>Bread and dairy</h1>";
//   let body = document.body;
//   body.style.display = "none";
//   body.appendChild(bread);
// });

let signupBtn = document.querySelector("#btnSignup");
let orderTag = document.querySelector("button");
document.addEventListener("DOMContentLoaded", function () {
  // Get the clickable div element by its ID
  var breadDiv = document.querySelector("#bread");
  var cakeDiv = document.querySelector("#cake");
  var crispyDiv = document.querySelector("#crispy");
  let drinksDiv = document.querySelector("#drink");
  let birthdCakeDiv = document.querySelector("#bd");

  breadDiv.addEventListener("click", function () {
    window.location.href = "NewMenu.html";
  });
  cakeDiv.addEventListener("click", function () {
    window.location.href = "NewMenu.html";
  });
  crispyDiv.addEventListener("click", function () {
    window.location.href = "NewMenu.html";
  });
  birthdCakeDiv.addEventListener("click", function () {
    window.location.href = "NewMenu.html";
  });
  drinksDiv.addEventListener("click", function () {
    window.location.href = "NewMenu.html";
  });
});

orderTag.addEventListener("click", () => {
  window.location.href = "order.html";
});
signupBtn.addEventListener("click", () => {
  window.location.href = "signup.html";
});
