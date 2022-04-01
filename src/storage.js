export default class Storage {
  addToStorage(type, dataObj) {
    localStorage.setItem(type, JSON.stringify(dataObj));
  }
}
