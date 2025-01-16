// scripts/PotteryWheel.js

// Initialize the primary key for each piece of pottery
let potteryId = 1;

const makePottery = (shape, weight, height) => {
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