import style from "./style.css";
import ListBinding from "./storage.js";
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

// add object to global array. loop through array of task objects.Each returning an html item to dom

class UI {
  static content = document.querySelector(".task-content");
  static taskPopup = document.querySelector(".task-popup");
  static addPopUpBtn = document.querySelector(".add-task");
  static contentDOM = new ListBinding(UI.content);
  static loadTasksOnPage() {
    UI.contentDOM.listElement.innerHTML = "";
    for (let task of UI.contentDOM.taskData) {
      UI.contentDOM.addHTMLtoElement(task.getListHTML());
    }
  }
  static initTaskItemBtns() {
    const item = document.querySelectorAll(".task-item");
    let i = UI.contentDOM.taskData.length;
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
        console.log(UI.contentDOM.taskData[i]);
      });
    });
  }

  static addTaskOnEvent() {
    UI.toggleVisibility(UI.taskPopup);
    const nameInput = document.querySelector(".data-name");
    const dateInput = document.querySelector("#due-date");
    const taskList = document.querySelector(".task-list");
    let task, name, date;

    if (dateInput.value === "") {
      task = new Task(nameInput.value);
      UI.contentDOM.addTaskToArr(task);
      date = "No date";
      name = task.name;
    } else {
      task = new Task(nameInput.value, dateInput.value);
      UI.contentDOM.addTaskToArr(task);
      name = task.name;
      date = task.getDateFormatted();
    }

    UI.loadTasksOnPage();

    // taskList.innerHTML += task.getListHTML();
    // let dateChange = UI.contentDOM.listElement.querySelectorAll(".date-change");
    // dateChange.forEach((e) => {
    //   e.classList.add("works");
    //   e.addEventListener("change", () => {
    //     console.log(e);
    //     const year = e.value.split("-")[0];
    //     const month = e.value.split("-")[1];
    //     const day = e.value.split("-")[2];
    //     const newDate = `${month}/${day}/${year}`;
    //     taskDate.textContent = newDate;
    //     taskDate.classList.toggle("visibility");
    //     e.classList.toggle("visibility");
    //   });
    // });
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
