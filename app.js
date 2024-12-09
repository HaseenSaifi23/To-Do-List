///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let Input = document.querySelector("input");
let U_list = document.querySelector("ul");

Input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    Add_input(Input.value);
    Input.value = "";
  }
});

let Add_input = (result) => {
  let list_item = document.createElement("li");
  list_item.innerHTML = `${result} <i class="fa-solid fa-xmark"></i>`;

  list_item.querySelector("i").addEventListener("click", () => {
    list_item.remove();
  });

  list_item.addEventListener("click", () => {
    list_item.classList.toggle("done");
  });
  U_list.append(list_item);
};
