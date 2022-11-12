import Util from "./Util.js";

export default class Task {
  private id: string;
  private parentElement: HTMLDivElement;
  private todoLi: HTMLLIElement;
  private btnCheck: HTMLButtonElement;
  private btnTrash: HTMLButtonElement;

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
  }

  public getElement(): HTMLLIElement {
    return this.todoLi;
  }

  public getDiv(): HTMLDivElement {
    return this.parentElement;
  }
}
