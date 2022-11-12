import ICard from "../interfaces/ICard";
import Task from "./Task.js";
import Util from "./Util.js";

export default class Card implements ICard {
  private id: string;
  private tasks: Array<Task> = [];
  private cardDiv: HTMLDivElement;
  private containerDiv: HTMLDivElement;
  private cardHeader: HTMLDivElement;
  private inputColors: HTMLInputElement;
  private cardTitle: HTMLInputElement;
  private cardUl: HTMLUListElement;
  private cardInputText: HTMLInputElement;
  private cardInputBtn: HTMLInputElement;
  private divUserInputs: HTMLDivElement;
  constructor() {
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
      let value = (e.target as HTMLInputElement).value;
      observers.forEach((element) => {
        element.style.backgroundColor = value;
      });
    });

    //CARD TITLE
    this.cardTitle = document.createElement("input");
    this.cardTitle.classList.add("cardTitleInput");
    this.cardTitle.setAttribute("type", "text");

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

  public addTask(): boolean {
    try {
      const task = new Task();
      task.getElement().innerText = this.cardInputText.value;
      this.tasks.push(task);
      for (let index = 0; index < this.tasks.length; index++) {
        this.cardUl.appendChild(this.tasks[index].getDiv());
      }
      this.cardInputText.value = "";
      return true;
    } catch {
      console.log("error");
      return false;
    }
  }

  removeTask(task: Task): boolean {
    try {
      return true;
    } catch {
      return false;
    }
  }

  private build(): boolean {
    try {
      document.querySelector(".grid")?.appendChild(this.cardDiv);
      document.querySelector(".todoNewCard")?.before(this.cardDiv);
      return true;
    } catch {
      console.log("Card hasnt been builded");
      return false;
    }
  }
}
