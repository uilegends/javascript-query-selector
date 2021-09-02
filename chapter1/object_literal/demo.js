let user = {
  name: "Ghan",
  age: 25,
  city: "Noida",
  location: "UP",
  login: function () {
    console.log("Login code goes her");
  },
  logOut: function () {
    console.log("Logout goes here");
  },
  blog: ["Name", "City", "Country"],
  printBlog: function () {
    return this.blog;
  },
};

let ul = document.querySelector(".listing");
// console.log(user.login());
let html = "";
let blogNew = user.printBlog().forEach((res) => (html += `<li>${res}</li>`));
ul.innerHTML = html;
