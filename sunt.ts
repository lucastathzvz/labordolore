function sum(...numbers: number[]): number {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Example usage:
const total = sum(1, 2, 3, 4, 5); // returns 15
