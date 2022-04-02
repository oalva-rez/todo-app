import Project from "./project";
import { format, addDays, setDate } from "date-fns";
export default class Task {
  constructor(name, date = "No date") {
    this.name = name;
    this.date = date;
  }

  getFormattedDate() {
    if (this.date === "No date") {
      return "No date";
    } else if (this.date.includes("/")) {
      return this.date;
    } else {
      const year = this.date.split("-")[0];
      const month = this.date.split("-")[1];
      const day = this.date.split("-")[2];

      return `${month}/${day}/${year}`;
    }
  }

  getDateObject() {
    if (this.date === "No date") {
      return "No date";
    } else {
      const year = this.date.split("/")[2];
      const monthIndex = this.date.split("/")[0] - 1;
      const day = this.date.split("/")[1];
      return new Date(year, monthIndex, day);
    }
  }

  getListHTML() {
    return `<li class="task-item">
    <input type="checkbox" class="task-check" />
    <div class="task-name">${this.name}</div>
    <div class="task-date">${this.date}</div>
    <input type="date" class="date-change visibility" />
  </li>`;
  }
}
