const name = 'Kim';

function person() {
  const name = 'Lee';

  // Define a function called `displayName()` that accesses the `name` variable
  function displayName() {
    console.log(name);
  }

  // Return the `displayName` function
  return displayName;
}

// Invoke `displayName()` to get a reference to the inner function
const displayFunc = person();

// Call the `displayFunc` to print "Lee" in the console
displayFunc();

console.log(name); // This will print "Kim" because it's outside the `person()` function scope
