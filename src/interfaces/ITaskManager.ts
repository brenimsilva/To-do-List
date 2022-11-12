import Task from "../classes/Task";

export default interface ITaskManager {
  addTask(taks: Task): boolean;
  removeTask(task: Task): boolean;
  editTask(task: Task, newValue: string): boolean;
  completeTask(task: Task): boolean;
  printAllTasks(cardUl: HTMLUListElement): void;
  checkIfCanAddNewTask(cardInputText: HTMLInputElement): boolean;
  showEditTaskModal(task: Task): void;
}
