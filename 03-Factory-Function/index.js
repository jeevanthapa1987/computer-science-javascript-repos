const beverage = function() {
  // Create 3 variables for the `type`, `price`, and `origin` of the beverage
  // Assign them to values of your choice
  const type = "coffee";
  const price = 6;
  const origin = "Kenya";

  // Return an object literal which contains the methods `product()`, `amount()`, and `place()`
  return {
    // `product()` will print an invitation to drink the `type` of beverage
    product() {
      console.log(`Would you like a ${type}?`);
    },
    // `amount()` will print out the `price` of the beverage
    amount() {
      console.log(`The price of this ${type} is $${price}.`);
    },
    // `place()` will print out the `origin` of the beverage
    place() {
      console.log(`This ${type} is from ${origin}!`);
    },
  };
};

const drink = beverage();
// Invoke the 3 methods
drink.product();
drink.amount();
drink.place();
