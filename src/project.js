import Task from "./task.js";

export default class Project {
  constructor(name) {
    this.name = name;
    this.taskArr = [];
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
