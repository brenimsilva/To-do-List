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
}
Util.id = 0;
