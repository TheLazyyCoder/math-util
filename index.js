/**
 * Adds two numbers together.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

// Export the functions so they can be imported via require()
module.exports = {
  add,
  subtract
};
