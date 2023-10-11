const data = {
    name: "SHANKAR K S",
    age: 23,
    city: "CHENNAI"
  };
  
  // Using a for loop
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = data[key];
    console.log(key + ": " + value);
  }
  



// Using a for...in loop:

for (let key in data) {
  console.log(key + ": " + data[key]);
}