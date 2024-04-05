// Define an example interface to work with
interface Example {
  id: number;
  name: string;
  age: number;
  email: string;
}

// Use 'Pick' to create a type with only 'id' and 'name' properties
type PickedExample = Pick<Example, 'id' | 'name'>;

// Use 'Omit' to create a type without 'email' property
type OmittedExample = Omit<Example, 'email'>;

// Function to demonstrate working with 'PickedExample'
function displayPicked(example: PickedExample) {
  console.log(`Id: ${example.id}, Name: ${example.name}`);
}

// Function to demonstrate working with 'OmittedExample'
function displayOmitted(example: OmittedExample) {
  console.log(`Id: ${example.id}, Name: ${example.name}, Age: ${example.age}`);
}

// Example usage
const example: Example = {
  id: 1,
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
};

const picked: PickedExample = {
  id: example.id,
  name: example.name
};

const omitted: OmittedExample = {
  id: example.id,
  name: example.name,
  age: example.age
};

displayPicked(picked);
displayOmitted(omitted);
