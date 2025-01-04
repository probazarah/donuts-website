let popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("openpopup");
}
function closePopup() {
  popup.classList.remove("openpopup");
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  openPopup();
});
