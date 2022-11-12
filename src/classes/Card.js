import Modal from "./Modal.js";
import Task from "./Task.js";
import Util from "./Util.js";
export default class Card {
    constructor() {
        this.taskList = [];
        this.id = Util.generateID("C");
        // CONTAINERS
        this.cardDiv = document.createElement("div");
        this.cardDiv.classList.add("todoCard");
        this.containerDiv = document.createElement("div");
        this.containerDiv.classList.add("todoContainer");
        // CARD HEADER
        this.cardHeader = document.createElement("div");
        this.cardHeader.classList.add("cardHeader");
        // BTN COLOR
        // this.btnColors = document.createElement("div");
        // this.btnColors.classList.add("btnColors");
        //INPUT COLOR
        this.inputColors = document.createElement("input");
        this.inputColors.type = "color";
        this.inputColors.classList.add("color_input");
        this.inputColors.classList.add("btnColors");
        this.inputColors.addEventListener("input", (e) => {
            let observers = [this.inputColors, this.cardHeader, this.cardInputBtn];
            let value = e.target.value;
            observers.forEach((element) => {
                element.style.backgroundColor = value;
            });
        });
        //CARD TITLE
        this.cardTitle = document.createElement("input");
        this.cardTitle.classList.add("cardTitleInput");
        this.cardTitle.setAttribute("type", "text");
        this.cardTitle.placeholder = "Insert Title";
        // UL
        this.cardUl = document.createElement("ul");
        this.cardUl.classList.add("todoList");
        // ADD USER INPUT FIELDS TO CARD
        this.divUserInputs = document.createElement("div");
        this.cardInputText = document.createElement("input");
        this.cardInputText.setAttribute("type", "text");
        this.cardInputText.classList.add("userInput");
        this.cardInputBtn = document.createElement("input");
        this.cardInputBtn.setAttribute("type", "submit");
        this.cardInputBtn.setAttribute("value", "+");
        this.cardInputBtn.classList.add("btnSubmit");
        this.cardInputBtn.classList.add("fa-solid");
        this.cardInputBtn.classList.add("fa-circle-plus");
        this.cardInputBtn.addEventListener("click", () => {
            this.addTask();
        });
        // APPEND ELEMENTS TO CURRENT DIVS
        this.cardHeader.appendChild(this.cardTitle);
        this.cardHeader.appendChild(this.inputColors);
        this.cardDiv.appendChild(this.cardHeader);
        this.divUserInputs.appendChild(this.cardInputText);
        this.divUserInputs.appendChild(this.cardInputBtn);
        this.containerDiv.appendChild(this.cardUl);
        this.cardDiv.appendChild(this.containerDiv);
        this.cardDiv.appendChild(this.divUserInputs);
        this.build();
    }
    addTask() {
        if (this.checkIfCanAddNewTask()) {
            try {
                const task = new Task();
                task.getButton("trash").addEventListener("click", () => {
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
    showEditTaskModal(task) {
        try {
            const modal = new Modal(task.getElement().innerText);
            document.body.appendChild(modal.container);
            modal.btnEdit.addEventListener("click", () => {
                const itemBeingEditedIndex = this.taskList.findIndex((element) => {
                    return element.id === task.id;
                });
                this.taskList[itemBeingEditedIndex].setLiText(modal.htmlTitle.value);
            });
            this.printAllTasks();
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    build() {
        var _a, _b;
        try {
            (_a = document.querySelector(".grid")) === null || _a === void 0 ? void 0 : _a.appendChild(this.cardDiv);
            (_b = document.querySelector(".todoNewCard")) === null || _b === void 0 ? void 0 : _b.before(this.cardDiv);
            return true;
        }
        catch (_c) {
            console.log("Card hasnt been builded");
            return false;
        }
    }
    checkIfCanAddNewTask() {
        if (!this.cardInputText.value) {
            return false;
        }
        else if (this.taskList.length > 5) {
            return false;
        }
        else {
            return true;
        }
    }
    printAllTasks() {
        this.cardUl.innerHTML = "";
        for (let index = 0; index < this.taskList.length; index++) {
            this.cardUl.appendChild(this.taskList[index].getDiv());
        }
    }
}
