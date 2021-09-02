const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const closeBtn = document.querySelector(".popup-close");

// Click button to open popup
button.addEventListener("click", () => {
  popup.style.display = "block";
});

// Close Button Click
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
// Outer Click close event
popup.addEventListener("click", () => {
  popup.style.display = "none";
});
