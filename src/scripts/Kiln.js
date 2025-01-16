// scripts/Kiln.js

const firePottery = (pottery, temperature) => {
    // Add a new property 'fired' with the value of true
    pottery.fired = true;
  
    // Add a new property 'cracked' based on the temperature
    pottery.cracked = temperature > 2200;
  
    // Return the augmented pottery object
    return pottery;
  }
  
  // Export the firePottery function
  export { firePottery };