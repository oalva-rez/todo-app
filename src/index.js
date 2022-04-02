import style from "./style.css";
import ListBinding from "./storage.js";
import Task from "./task.js";
import Project from "./project.js";
import compareAsc from "date-fns/compareAsc";

export default class UI {
  static content = document.querySelector(".task-content");
  static taskPopup = document.querySelector(".task-popup");
  static addPopUpBtn = document.querySelector(".add-task");
  static todayTab = document.querySelector(".today-tab");
  static weekTab = document.querySelector(".week-tab");

  static contentDOM = new ListBinding(UI.content);

  static addTaskToDOM(tasks) {
    UI.contentDOM.listElement.innerHTML = "";
    for (let task of tasks) {
      let li = document.createElement("li");
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
      taskDate.textContent = task.getFormattedDate();

      li.append(checkbox);
      li.append(taskName);
      li.append(taskDate);
      li.append(dateChange);
      UI.contentDOM.listElement.append(li);
    }
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
    const contentLabel = document.querySelector(".content-label");
    if (event.target.type === "checkbox") {
      // event.target.parentElement.remove();

      const taskName = event.target.parentElement.querySelector(".task-name");

      for (let i in UI.contentDOM.taskData) {
        if (taskName.textContent === UI.contentDOM.taskData[i].name) {
          UI.contentDOM.taskData.splice(i, 1);
        }
      }
      for (let j in UI.contentDOM.todayData) {
        if (taskName.textContent === UI.contentDOM.todayData[j].name) {
          UI.contentDOM.todayData.splice(j, 1);
        }
      }
      for (let k in UI.contentDOM.weekData) {
        if (taskName.textContent === UI.contentDOM.weekData[k].name) {
          UI.contentDOM.weekData.splice(k, 1);
        }
      }
    } else return;
    if (contentLabel.textContent === "Home") {
      UI.addTaskToDOM(UI.contentDOM.taskData);
    } else if (contentLabel.textContent === "Today") {
      UI.addTaskToDOM(UI.contentDOM.todayData);
    } else if (contentLabel.textContent === "This Week") {
      UI.addTaskToDOM(UI.contentDOM.weekData);
    }
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
        UI.contentDOM.filterTodayTasks();
        UI.contentDOM.filterWeekTasks();

        e.stopImmediatePropagation();
      });
    }
  }

  static initBtnEvents() {
    const submitTaskBtn = document.querySelector(".add-btn");
    const cancelTaskBtn = document.querySelector(".cancel-btn");
    const homeTab = document.querySelector(".home-tab");

    UI.contentDOM.listElement.addEventListener("click", UI.removeTask);
    UI.contentDOM.listElement.addEventListener("click", UI.updateDate);

    homeTab.addEventListener("click", UI.loadHomePage);
    UI.todayTab.addEventListener("click", UI.loadTodayPage);
    UI.weekTab.addEventListener("click", UI.loadWeekPage);

    UI.addPopUpBtn.addEventListener("click", () => {
      UI.toggleVisibility(this.taskPopup);
      UI.toggleVisibility(this.addPopUpBtn);
    });
    cancelTaskBtn.addEventListener("click", () => {
      const addTaskCont = document.querySelector(".append-btn");

      if (!addTaskCont.classList.contains("visibility")) {
        UI.toggleVisibility(addTaskCont.querySelector(".add-task"));
      }

      UI.toggleVisibility(this.taskPopup);
      UI.toggleVisibility(this.addPopUpBtn);
      document.querySelector(".data-name").value = "";
      document.querySelector("#due-date").value = "";
    });
    submitTaskBtn.addEventListener("click", () => {
      const addTaskCont = document.querySelector(".append-btn");

      if (!addTaskCont.classList.contains("visibility")) {
        UI.toggleVisibility(addTaskCont.querySelector(".add-task"));
      }

      UI.addToTaskData();
      UI.contentDOM.filterTodayTasks();
      UI.contentDOM.filterWeekTasks();
      UI.toggleVisibility(this.taskPopup);
      UI.toggleVisibility(this.addPopUpBtn);
      document.querySelector(".data-name").value = "";
      document.querySelector("#due-date").value = "";
    });
  }
  static appendAddTaskBtn() {
    const btnContainer = document.querySelector(".append-btn");
    const btn = document.createElement("div");
    btnContainer.innerHTML = "";
    btn.classList.add("add-task");
    btn.textContent = "+ Add Task";
    btnContainer.append(btn);
  }
  static toggleVisibility(element) {
    element.classList.toggle("visibility");
  }

  // fix "+ add task" visibility issue
  static loadHomePage() {
    const contentLabel = document.querySelector(".content-label");
    UI.appendAddTaskBtn();
    const addTask = document.querySelector(".add-task");
    addTask.addEventListener("click", () => {
      UI.toggleVisibility(UI.taskPopup);
      UI.toggleVisibility(addTask);
    });
    contentLabel.textContent = "Home";
    UI.contentDOM.listElement.innerHTML = "";
    UI.addTaskToDOM(UI.contentDOM.taskData);
  }
  static loadTodayPage() {
    const contentLabel = document.querySelector(".content-label");
    const btnContainer = document.querySelector(".append-btn");
    btnContainer.innerHTML = "";
    contentLabel.textContent = "Today";
    UI.contentDOM.listElement.innerHTML = "";

    UI.addTaskToDOM(UI.contentDOM.todayData);
  }
  static loadWeekPage() {
    const contentLabel = document.querySelector(".content-label");
    const btnContainer = document.querySelector(".append-btn");
    btnContainer.innerHTML = "";
    contentLabel.textContent = "This Week";
    UI.contentDOM.listElement.innerHTML = "";

    UI.addTaskToDOM(UI.contentDOM.weekData);
  }
}
UI.initBtnEvents();
