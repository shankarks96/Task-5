
const data = {
  name: "SHANKAR K S",
  age: 23,
  city: "CHENNAI"
};

// Using a for loop
const keys1 = Object.keys(data);
for (let i = 0; i < keys1.length; i++) {
  const key = keys1[i];
  const value = data[key];
  console.log(key + ": " + value);
}

// Using a for...in loop:
for (let key in data) {
  console.log(key + ": " + data[key]);
}

// Using a for...of loop:
const keys2 = Object.keys(data);
for (let key of keys2) {
  console.log(key + ": " + data[key]);
}
// Using a forEach loop:

// Convert the object into an array of key-value pairs using Object.entries()
const entries = Object.entries(data);

// Use forEach to iterate over the key-value pairs
entries.forEach(([key, value]) => {
  console.log(key + ": " + value);
});