// scripts/PotteryWheel.js

// Initialize the primary key for each piece of pottery
let potteryId = 1;

/**
 * Creates a new piece of pottery.
 *
 * @param {string} shape - The shape of the piece of pottery (e.g. "Mug", "Platter").
 * @param {number} weight - The weight of the piece (e.g. 1, 5).
 * @param {number} height - The height of the piece (e.g. 3, 7).
 * @returns {Object} An object representing the new piece of pottery.
 */
function makePottery(shape, weight, height) {
  // Create a new piece of pottery with the given properties
  const pottery = {
    shape,
    weight,
    height,
    id: potteryId,
  };

  // Increment the primary key for the next piece of pottery
  potteryId++;

  // Return the new piece of pottery
  return pottery;
}

// Export the makePottery function
export { makePottery };