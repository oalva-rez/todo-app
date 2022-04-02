import style from "./style.css";
import ListBinding from "./storage.js";
import Task from "./task.js";
import Project from "./project.js";
import compareAsc from "date-fns/compareAsc";

export default class UI {
  static content = document.querySelector(".task-content");
  static taskPopup = document.querySelector(".task-popup");
  static addPopUpBtn = document.querySelector(".add-task");
  static todayBtn = document.querySelector(".today-tab");
  static contentDOM = new ListBinding(UI.content);

  static addTaskToDOM(tasks) {
    let li;
    for (let task of tasks) {
      li = document.createElement("li");
      let checkbox = document.createElement("input");
      let taskName = document.createElement("div");
      let taskDate = document.createElement("div");
      let dateChange = document.createElement("input");
      li.classList.add("task-item");
      checkbox.classList.add("task-check");
      taskName.classList.add("task-name");
      taskDate.classList.add("task-date");
      dateChange.classList.add("date-change");
      dateChange.classList.add("visibility");
      checkbox.setAttribute("type", "checkbox");
      dateChange.setAttribute("type", "date");

      taskName.textContent = task.name;
      taskDate.textContent = task.date();
      console.log(taskDate);

      li.append(checkbox);
      li.append(taskName);
      li.append(taskDate);
      li.append(dateChange);
    }
    UI.contentDOM.listElement.append(li);
    console.log("");
  }

  static addToTaskData() {
    let nameInput = document.querySelector(".data-name");
    let dateInput = document.querySelector("#due-date");
    let task;

    if (dateInput.value === "") {
      task = new Task(nameInput.value);
      UI.contentDOM.addTaskToArr(task);
    } else {
      task = new Task(nameInput.value, dateInput.value);
      UI.contentDOM.addTaskToArr(task);
    }

    UI.addTaskToDOM(UI.contentDOM.taskData);
    UI.updateTaskArr();
  }
  static updateTaskArr() {
    const listItems = UI.contentDOM.listElement.querySelectorAll("li");
    UI.contentDOM.taskData = [];
    listItems.forEach((e) => {
      let name = e.querySelector(".task-name");
      let date = e.querySelector(".task-date");
      name = name.textContent;
      date = date.textContent;
      UI.contentDOM.taskData.push(new Task(name, date));
    });
  }
  static removeTask(event) {
    if (event.target.type === "checkbox") {
      event.target.parentElement.remove();

      UI.updateTaskArr();
    } else return;
  }
  static updateDate(event) {
    if (event.target.classList.value === "task-date") {
      let taskDate = event.target.parentElement.querySelector(".task-date");
      let dateChange = event.target.parentElement.querySelector(".date-change");

      UI.toggleVisibility(taskDate);
      UI.toggleVisibility(dateChange);
      dateChange.addEventListener("change", (e) => {
        UI.toggleVisibility(taskDate);
        UI.toggleVisibility(dateChange);
        const year = dateChange.value.split("-")[0];
        const month = dateChange.value.split("-")[1];
        const day = dateChange.value.split("-")[2];
        const newDate = `${month}/${day}/${year}`;
        taskDate.textContent = newDate;
        UI.updateTaskArr();
        console.log(UI.contentDOM.taskData);

        e.stopImmediatePropagation();
      });
    }
  }

  static initBtnEvents() {
    const submitTaskBtn = document.querySelector(".add-btn");
    const cancelTaskBtn = document.querySelector(".cancel-btn");

    UI.contentDOM.listElement.addEventListener("click", UI.removeTask);
    UI.contentDOM.listElement.addEventListener("click", UI.updateDate);
    UI.todayBtn.addEventListener("click", UI.loadTodayTab);
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
    submitTaskBtn.addEventListener("click", () => {
      UI.addToTaskData();
      UI.contentDOM.filterTodayTasks();
      UI.toggleVisibility(this.taskPopup);
      UI.toggleVisibility(this.addPopUpBtn);
      document.querySelector(".data-name").value = "";
      document.querySelector("#due-date").value = "";
    });
  }

  static toggleVisibility(element) {
    element.classList.toggle("visibility");
  }

  static loadTodayTab() {
    // UI.contentDOM.listElement.innerHTML = "";
    UI.addPopUpBtn.remove();
    UI.addTaskToDOM(UI.contentDOM.filterTodayTasks());
  }
}
UI.initBtnEvents();
