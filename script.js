let popupContainer = document.getElementById("popup-container");
function openPopup() {
  popupContainer.classList.add("openpopup");
}
function closePopup() {
  popupContainer.classList.remove("openpopup");
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  openPopup();
});

document
  .getElementById("close-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    closePopup();
  });
