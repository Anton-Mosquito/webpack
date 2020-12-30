const map = new Map([["a", 1]]);
// console.log(map.get("a"));
map.set("b", 2).set(NaN, "Number");
// console.log(map.get(NaN));
// console.log(map.clear);
// console.log(map.has("b"));
// map.delete("b");
// console.log(map.size);

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

const set = new Set([1, 1, 2, 3, 4, 6, 7, 7, 7, 19, 19]);
// console.log(set);
// console.log(set.size);
// console.log(set.clear());
// set.delete(1);
console.log(set.keys());
console.log(set.values());
console.log(set.entries());
