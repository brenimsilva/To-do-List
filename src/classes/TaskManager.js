import Modal from "./Modal.js";
import Task from "./Task.js";
export default class TaskManager {
    constructor() {
        this.taskList = [];
    }
    addTask() {
        if (this.checkIfCanAddNewTask()) {
            try {
                const task = new Task();
                task.getButton("TRASH").addEventListener("click", () => {
                    this.removeTask(task);
                });
                task.getButton("EDIT").addEventListener("click", () => {
                    this.showEditTaskModal(task);
                });
                task.getElement().innerText = this.cardInputText.value;
                this.taskList.push(task);
                this.printAllTasks();
                this.cardInputText.value = "";
                return true;
            }
            catch (_a) {
                console.log("error");
                return false;
            }
        }
        else {
            return false;
        }
    }
    removeTask(task) {
        try {
            this.taskList = this.taskList.filter((element) => {
                return element.id !== task.id;
            });
            this.printAllTasks();
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    editTask(task, newValue) {
        try {
            const itemBeingEditedIndex = this.taskList.findIndex((element) => {
                return element.id === task.id;
            });
            this.taskList[itemBeingEditedIndex].setLiText(newValue);
            this.printAllTasks();
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    completeTask(task) {
        try {
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    checkIfCanAddNewTask(cardInputText) {
        if (!cardInputText.value) {
            return false;
        }
        else if (this.taskList.length > 5) {
            return false;
        }
        else {
            return true;
        }
    }
    printAllTasks(cardUl) {
        cardUl.innerHTML = "";
        for (let index = 0; index < this.taskList.length; index++) {
            cardUl.appendChild(this.taskList[index].getDiv());
        }
    }
    showEditTaskModal(task) {
        try {
            const modal = new Modal(task.getElement().innerText);
            document.body.appendChild(modal.container);
            modal.btnEdit.addEventListener("click", () => {
                this.editTask(task, modal.htmlTitle.value);
            });
            return true;
        }
        catch (_a) {
            return false;
        }
    }
}
