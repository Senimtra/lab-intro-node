class SortedList {

  // ################################
  // ## Iteration 1: constructor() ##
  // ################################

  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  // ############################
  // ## Iteration 2: add(item) ##
  // ############################

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  // ###########################
  // ## Iteration 3: get(pos) ##
  // ###########################

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  // ########################
  // ## Iteration 4: max() ##
  // ########################

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() { }

  sum() { }

  avg() { }
}

module.exports = SortedList;
