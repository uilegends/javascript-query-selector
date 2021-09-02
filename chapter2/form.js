const form = document.querySelector(".signup-form");
const username = document.querySelector("#username");
form.addEventListener("click", (e) => {
  e.preventDefault();
  // Type one for form input value to take
  // console.log(username.value);
  console.log(form.username.value);
});
