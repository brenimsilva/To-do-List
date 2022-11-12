import Card from "./Card.js";
export default class Util {
    /**
     *
     * @param {string} prefix Expects a char for first letter
     *
     */
    static generateID(prefix) {
        const rightPrefix = prefix[0].toUpperCase();
        return `${rightPrefix}${++this.id}`;
    }
    static start() {
        var _a;
        (_a = document.getElementById("btn-addCard")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            var _a, _b;
            if ((_a = document.querySelector(".todoNewCard")) === null || _a === void 0 ? void 0 : _a.classList.contains("move")) {
            }
            else {
                new Card();
                (_b = document.querySelector(".todoNewCard")) === null || _b === void 0 ? void 0 : _b.classList.add("move");
                setTimeout(() => {
                    var _a;
                    (_a = document.querySelector(".todoNewCard")) === null || _a === void 0 ? void 0 : _a.classList.remove("move");
                }, 1500);
            }
        });
    }
}
Util.id = 0;
