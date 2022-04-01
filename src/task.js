import Project from "./project";
import { format, addDays } from "date-fns";
export default class Task {
  constructor(name, date = "No date") {
    this.name = name;
    this.date = date;
  }
  getDateFormatted() {
    if (this.date === "No date") {
      return "No date";
    } else {
      const year = this.date.split("-")[0];
      const month = this.date.split("-")[1];
      const day = this.date.split("-")[2];
      return `${month}/${day}/${year}`;
    }
  }
}
