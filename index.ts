import Card from "./src/classes/Card.js";
import Task from "./src/classes/Task.js";
import Util from "./src/classes/Util.js";

document.getElementById("btn-addCard")?.addEventListener("click", () => {
  new Card();
});
