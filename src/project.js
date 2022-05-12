import Task from "./task.js";
import UI from "./index.js";

export default class Project {
  constructor(name, color = null) {
    this.name = name;
    this.taskArr = [];
    this.color = color;
  }
  addTask(task) {
    this.taskArr.push(task);
  }
  getTask() {
    return this.taskArr;
  }
  getName() {
    return this.name;
  }
}
