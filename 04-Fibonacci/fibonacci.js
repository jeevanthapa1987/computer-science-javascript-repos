const linear = num => {
  if (num <= 2) return 1; // The first two numbers in the sequence are always 1

  let prev = 1;
  let curr = 1;

  for (let i = 2; i < num; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

console.log(linear(10)); // Output: 55
