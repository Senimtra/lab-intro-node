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

  get(pos) { }

  max() { }

  min() { }

  sum() { }

  avg() { }
}

module.exports = SortedList;
