const form = document.querySelector(".todo-create") as HTMLFormElement;
const input = document.querySelector(".todo-create__input") as HTMLInputElement;
const list = document.querySelector(".todo-works") as HTMLElement;

// add to do
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const text = (data.get("todo") as string)?.trim();

  if (text) {
    const item = document.createElement("div");
    item.className = "todo-items";
    item.innerHTML = `
      <label class="">
        <div class="todo-items__wrapper">
          <div class="todo-checkbox"><input type="checkbox" /></div>
          <h4 class="todo-title">${text}</h4>
        </div>
      </label>
      <i class="fa-solid fa-xmark"></i>
    `;

    // delete todo
    item.querySelector("i")?.addEventListener("click", () => {
      item.remove();
    });

    const checkbox = item.querySelector("input") as HTMLInputElement;
    checkbox.addEventListener("change", () => {
      item.classList.toggle("completed", checkbox.checked);
    });

    list.prepend(item);
    input.value = "";
  }
});

const mode = document.getElementById("toggleBtn")!;

if (mode) {
  mode.addEventListener("click", () => {
    if (mode.classList.contains("fa-moon")) {
      mode.classList.remove("fa-moon");
      mode.classList.add("fa-sun");
    } else {
      mode.classList.remove("fa-sun");
      mode.classList.add("fa-moon");
    }
  });
}
