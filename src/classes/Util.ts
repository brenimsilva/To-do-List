import Card from "./Card.js";

export default class Util {
  static id: number = 0;

  /**
   *
   * @param {string} prefix Expects a char for first letter
   *
   */
  static generateID(prefix: string): string {
    const rightPrefix = prefix[0].toUpperCase();
    return `${rightPrefix}${++this.id}`;
  }

  static start() {
    document.getElementById("btn-addCard")?.addEventListener("click", () => {
      if (document.querySelector(".todoNewCard")?.classList.contains("move")) {
      } else {
        new Card();
        document.querySelector(".todoNewCard")?.classList.add("move");
        setTimeout(() => {
          document.querySelector(".todoNewCard")?.classList.remove("move");
        }, 1500);
      }
    });
  }
}
