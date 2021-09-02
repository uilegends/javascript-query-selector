const link = document.querySelector("a");

// Get Atrribute
console.log(link.getAttribute("href"));
link.setAttribute("href", "http://www.uilegends.in/");
const pTag = document.querySelector("p");
console.log(pTag.getAttribute("class"));

// Set Attribute
pTag.setAttribute("class", "error");

// Setting style attribute
const headDing = document.querySelector("h1");
headDing.setAttribute("style", "font-size:60px");

// Other ways to set attribute
headDing.style.color = "orange";

// Adding and removing classes
const content = document.querySelector("p");
content.classList.add("error");
content.classList.remove("success");
console.log(content.classList);

// Adding Atrributes for parent, child, sibling
const childNodes = document.querySelector("article");

console.log(childNodes.children);

// Get Parent, Next and previous Element

const heading = document.querySelector("h2");
// console.log(heading.parentElement.parentElement);
// console.log(heading.nextElementSibling);
// console.log(heading.previousElementSibling);
