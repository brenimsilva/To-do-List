export default class Modal {
  public container: HTMLDivElement;
  public htmlTitle: HTMLInputElement;
  public btnEdit: HTMLButtonElement;

  constructor(taskTitle: string) {
    this.htmlTitle = document.createElement("input");
    this.htmlTitle.type = "text";
    this.htmlTitle.value = taskTitle;
    this.btnEdit = document.createElement("button");
    this.btnEdit.innerText = "Editar";
    this.container = document.createElement("div");
    this.container.appendChild(this.htmlTitle);
    this.container.classList.add("modal_container");
    this.container.appendChild(this.btnEdit);
  }
}
