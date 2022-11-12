import Task from "../classes/Task";

export default interface ICard {
  addTask(taks: Task): boolean;
  removeTask(task: Task): boolean;
}
