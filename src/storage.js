// export default class Storage {
//   addToStorage(type, dataObj) {
//     localStorage.setItem(type, JSON.stringify(dataObj));
//   }
// }
import isToday from "date-fns/isToday";

export default class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.taskData = [];
  }
  filterTodayTasks() {
    let today = this.taskData.filter((obj) => {
      if (obj.date === "No date") {
        return false;
      } else if (isToday(obj.getDateObject())) {
        return true;
      }
    });
    return today;
  }
  addTaskToArr(task) {
    this.taskData.push(task);
  }
  addHTMLtoElement(html) {
    this.listElement.innerHTML += html;
  }
}
