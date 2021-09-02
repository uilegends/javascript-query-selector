// Click event on button click
const button = document.querySelector("button");
const ul = document.querySelector("ul");

// Adding new element with button click
button.addEventListener("click", () => {
  // One way
  ul.innerHTML += "<li>New elememnt adding</li>";
  // Other Way of adding
  const li = document.querySelector("li");
  li.textContent = "Something new content";
  // Append and Prepend
  // ul.append(li);
  ul.prepend(li);
});

const liList = document.querySelectorAll("li");

liList.forEach((items) => {
  items.addEventListener("click", (e) => {
    // const eachV = e.target;
    // console.log(e.target.innerHTML);
    // e.target has verity of values
    e.target.style.textDecoration = "line-through";
    // Removing Element
    e.target.remove();
  });
});
