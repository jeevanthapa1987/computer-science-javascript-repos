const listEl = document.querySelector('#grocery-list');
const shoppingCartEl = document.querySelector('#shopping-cart');
const fruits = ['Bananas', 'Apples', 'Oranges', 'Grapes', 'Blueberries'];

// Create an event listener on the common parent element of the groceries
listEl.addEventListener('click', function(event) {
  // Check if the clicked element is a button
  if (event.target.tagName === 'BUTTON') {
    // Get the parent <li> element of the clicked button
    const listItem = event.target.closest('li');
    // Get the index of the fruit in the array
    const fruitIndex = parseInt(listItem.id);
    // Get the name of the fruit using the index
    const fruitName = fruits[fruitIndex];
    // Create a new <div> element to hold the fruit name
    const fruitDiv = document.createElement('div');
    fruitDiv.textContent = fruitName;
    // Append the fruit <div> to the shopping cart
    shoppingCartEl.appendChild(fruitDiv);
  }
});
