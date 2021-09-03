const addForm = document.querySelector(".add");
const ul = document.querySelector(".todos");
const deleteItem = document.querySelector(".delete");
const search = document.querySelector(".search input");

// listing todo list
const generateTodolist = (todo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
   </li>
 `;
  ul.innerHTML += html;
};

// Adding todo list
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTodolist(todo);
    // Two Types
    // 1.addForm.add.value = "";
    addForm.reset();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodo = (term) => {
  Array.from(ul.children)
    .filter((res) => !res.textContent.toLowerCase().includes(term))
    .forEach((ressult) => {
      ressult.classList.add("d-none");
      ressult.classList.remove("d-flex");
    });

  Array.from(ul.children)
    .filter((res) => res.textContent.toLowerCase().includes(term))
    .forEach((ressult) => {
      ressult.classList.remove("d-none");
      ressult.classList.add("d-flex");
    });
};

search.addEventListener("keyup", () => {
  const term = search.value.trim();
  filterTodo(term);
});
