// scripts/PotteryList.js

import { usePottery } from './PotteryCatalog.js';

const PotteryList = () => {
  const potteryToSell = usePottery();
  let htmlRepresentations = '';

  // Loop through each piece of pottery
  potteryToSell.forEach((pottery, index) => {
    // Generate the HTML for the current piece of pottery
    const htmlRepresentation = `
      <section class="pottery" id="pottery--${index + 1}">
        <h2 class="pottery__shape">${pottery.shape}</h2>
        <div class="pottery__properties">
          Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
        </div>
        <div class="pottery__price">Price is $${pottery.price}</div>
      </section>
    `;
    // Append
    htmlRepresentations += htmlRepresentation;
  });

  // Return the string 
  return htmlRepresentations;
}

// Exports
export { PotteryList };