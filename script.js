const input = document.querySelector("[task-input]");
const addTaskButton = document.querySelector("[add-task-button]");
// const item = document.querySelectorAll("[listItem]");
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

  //delete chilkd element on checkbox click
  const checkBox = document.querySelectorAll("input[type=checkbox]");
  checkBox.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.remove();
    });
  });

  input.value = "";
};

addTaskButton.addEventListener("click", () => {
  createListItem();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createListItem();
  } else {
    return;
  }
});
