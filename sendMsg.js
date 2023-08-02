const sendMessageBtn = document.querySelector("#send");
const message = "You sent it successfully";
sendMessageBtn.addEventListener("click", () => {
  sendMessageBtn.style.backgroundColor = "green";
  window.alert("You sent successfully");
  console.log(message);
});
