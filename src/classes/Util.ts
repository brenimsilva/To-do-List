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
}
