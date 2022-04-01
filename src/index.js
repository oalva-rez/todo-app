import style from "./style.css";
import Storage from "./storage.js";
import Task from "./task.js";
import Project from "./project.js";
import compareAsc from "date-fns/compareAsc";

const task1 = new Task("task1");
const task2 = new Task("task2");
const task3 = new Task("task3");
const obj1 = new Project("Proj1");
const obj2 = new Project("Proj2");
const obj3 = new Project("Proj3");
obj1.addTask(task1);
obj2.addTask(task2);
obj3.addTask(task3);
console.log(obj1, obj2, obj3);

export default class UI {
  static content = document.querySelector(".content");
  static contentLabel = document.querySelector(".content-label");
  static taskContent = document.querySelector(".task-content");
  static taskList = document.querySelector(".task-list");
  static taskPopup = document.querySelector(".task-popup");
  static addPopUpBtn = document.querySelector(".add-task");

  static initTaskItemBtns() {
    const item = document.querySelectorAll(".task-item");
    item.forEach((e) => {
      const check = e.querySelector(".task-check");
      const taskDate = e.querySelector(".task-date");
      const dateChange = e.querySelector(".date-change");

      taskDate.addEventListener("click", () => {
        taskDate.classList.toggle("visibility");
        dateChange.classList.toggle("visibility");
      });
      check.addEventListener("change", () => {
        e.remove();
      });
      dateChange.addEventListener("change", () => {
        const year = dateChange.value.split("-")[0];
        const month = dateChange.value.split("-")[1];
        const day = dateChange.value.split("-")[2];
        const newDate = `${month}/${day}/${year}`;
        taskDate.textContent = newDate;
        taskDate.classList.toggle("visibility");
        dateChange.classList.toggle("visibility");
      });
    });
  }

  static appendTaskItem(name, date) {
    UI.taskList.innerHTML += `<li class="task-item">
    <input type="checkbox" class="task-check" />
    <div class="task-name">${name}</div>
    <div class="task-date">${date}</div>
    <input type="date" class="date-change visibility" />
  </li>`;
  }

  static addTaskOnEvent() {
    UI.toggleVisibility(UI.taskPopup);
    const nameInput = document.querySelector(".data-name");
    const dateInput = document.querySelector("#due-date");

    let task;
    if (dateInput.value === "") {
      task = new Task(nameInput.value);
    } else {
      task = new Task(nameInput.value, dateInput.value);
    }

    UI.appendTaskItem(task.name, task.getDateFormatted());
    nameInput.value = "";
    dateInput.value = "";
    UI.initTaskItemBtns();
    UI.toggleVisibility(UI.addPopUpBtn);
  }

  static initBtnEvents() {
    const submitTaskBtn = document.querySelector(".add-btn");
    const cancelTaskBtn = document.querySelector(".cancel-btn");
    const sortDates = document.querySelector(".due-date");

    UI.addPopUpBtn.addEventListener("click", () => {
      UI.toggleVisibility(this.taskPopup);
      UI.toggleVisibility(this.addPopUpBtn);
    });
    cancelTaskBtn.addEventListener("click", () => {
      UI.toggleVisibility(this.taskPopup);
      UI.toggleVisibility(this.addPopUpBtn);
      document.querySelector(".data-name").value = "";
      document.querySelector("#due-date").value = "";
    });
    submitTaskBtn.addEventListener("click", UI.addTaskOnEvent);
  }

  static toggleVisibility(element) {
    element.classList.toggle("visibility");
  }
}
UI.initBtnEvents();
UI.initTaskItemBtns();
