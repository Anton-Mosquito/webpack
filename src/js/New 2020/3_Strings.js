const start = "         Hello World!";
const end = "This is new JavaScript features           ";

// console.log(start.trimStart() + end.trimEnd());
// console.log((start + end).trim());

// console.log("vk".padStart(6, "www."));
// console.log("vk".padEnd(6, ".com"));
// console.log("vk");

// -------------------

function tag(strings, name, age) {
  const [s1, s2, s3] = strings;
  const ageStr = age > 42 ? "older" : "younger";
  return `${s1}${name}${s2}${ageStr}${s3}`;
}

const person = {
  name: "Max",
  age: 30,
};

const output = tag`Human names ${person.name} is ${person.age} year old`;
console.log(output);
