function calculatePower(base: number, exp: number): number {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}

// Usage
const baseNumber: number = 2;
const exponent: number = 3;
const power: number = calculatePower(baseNumber, exponent);

console.log(`${baseNumber} to the power of ${exponent} is ${power}`);
