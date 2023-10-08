

const fauxInput = document.querySelector(".fauxInput");
const input = document.querySelector("[task-input]");

const addTaskBtn = document.querySelector("[add-task-button]");
const clearTaskBtn = document.querySelector("[clear-task-button]");
const checkBox = document.querySelector("input[type=checkBox]");
const list = document.querySelector("[list]");

const inputLength = () => input.value.length;

const createListItem = () => {
  if (inputLength() > 0) {
    //create list item
    const listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);

    //create checkbox
    const itemCheckBox = document.createElement("input");
    itemCheckBox.type = "checkbox";
    listItem.appendChild(itemCheckBox);
  }

  //delete child element on checkbox click
  const checkBox = document.querySelectorAll("input[type=checkbox]");
  checkBox.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.classList.add("fade");
      setTimeout(() => {
        item.parentElement.remove();
      }, 300);
    });
  });

  input.value = "";
};

// add functionality to existintg list items
const item = document.querySelectorAll("[item]");
item.forEach((item) => {
  createListItem();
});

addTaskBtn.addEventListener("click", () => {
  createListItem();
});

//clear all tasks
clearTaskBtn.addEventListener("click", () => {
  list.classList.add("fade");
  setTimeout(() => {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
      list.classList.remove("fade");
    }
  }, 500);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createListItem();
  } else {
    return;
  }
});

document.documentElement.setAttribute("class", "js");
input.addEventListener(
  "keydown",
  function copyInput(event) {
    fauxInput.textContent = input.value;

    input.setAttribute("value", input.value);
  },
  false
);
