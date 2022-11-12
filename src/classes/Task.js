import Util from "./Util.js";
export default class Task {
    constructor() {
        this.id = Util.generateID("T");
        // CREATE DIV
        this.parentElement = document.createElement("div");
        this.parentElement.classList.add("todoDiv");
        // CREATE AND INSERT LI INSIDE NEWDIV
        this.todoLi = document.createElement("li");
        this.todoLi.classList.add("todoItem");
        this.parentElement.appendChild(this.todoLi);
        // CREATE BUTTON CHECK
        this.btnCheck = document.createElement("button");
        this.btnCheck.classList.add("btnCheck");
        this.btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>';
        this.parentElement.appendChild(this.btnCheck);
        // CREATE BUTTON TRASH
        this.btnTrash = document.createElement("button");
        this.btnTrash.classList.add("btnTrash");
        this.btnTrash.innerHTML = '<i class="fa-solid fa-trash"></i>';
        this.parentElement.appendChild(this.btnTrash);
        // CREATE BUTTON EDIT
        this.btnEdit = document.createElement("button");
        this.btnEdit.classList.add("btnTrash");
        this.btnEdit.innerHTML = '<i class="fa-solid fa-pen"></i>';
        this.parentElement.appendChild(this.btnEdit);
    }
    getElement() {
        return this.todoLi;
    }
    setLiText(newText) {
        this.todoLi.innerText = newText;
    }
    getDiv() {
        return this.parentElement;
    }
    getButton(checkOrTrash) {
        switch (checkOrTrash.toUpperCase()) {
            case "CHECK":
                return this.btnCheck;
                break;
            case "TRASH":
                return this.btnTrash;
                break;
            case "EDIT":
                return this.btnEdit;
                break;
            default:
                return document.createElement("button");
        }
    }
}
