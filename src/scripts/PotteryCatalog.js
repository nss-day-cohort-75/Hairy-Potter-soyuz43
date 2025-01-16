// scripts/PotteryCatalog.js

// Initialize an array to store pottery to be sold
let potteryToSell = [];

const toSellOrNotToSell = (pottery) => {
    // Check if the pottery is not cracked
    if (!pottery.cracked) {
      // Add a price property based on the weight
      if (pottery.weight >= 6) {
        pottery.price = 40;
      } else {
        pottery.price = 20;
      }
   // Add the pottery to the catalog
   potteryToSell.push(pottery);
}

// Return the augmented pottery object
return pottery;
}

/**
 * Returns a copy of the array of items to be sold.
 * @returns {Object[]} which is a copy of the potteryToSell array.
**/
const usePottery = () => {
    // Use the slice() method to create a copy of the array
    return potteryToSell.slice();
  }

// Export
export { toSellOrNotToSell, usePottery };