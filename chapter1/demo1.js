const uL = document.querySelector(".listItems");
const ulElement = ["Ghan", "Nilay", "Ashish", "Ravi"];

let html = ``;

ulElement.forEach(
  (value) => (html += `<li style="color:purple">${value}</li>`)
);
uL.innerHTML = html;
