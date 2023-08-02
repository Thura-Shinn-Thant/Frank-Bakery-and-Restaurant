let registerBtn = document.querySelector("#register");
let termsTag = document.querySelector("#terms");
termsTag.addEventListener("click", () => {
  window.location.href = "terms.html";
});
registerBtn.addEventListener("click", () => {
  window.confirm("You are now signed up");
});
