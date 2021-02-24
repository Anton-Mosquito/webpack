const nested = ["a", "b", ["c", "d"], ["e", ["f", "g"]]];

// console.log(nested.flat());
// console.log(nested.flat(2));

const techs = ["react redux", "angulra", "vue", "node and nestJs"];
// console.log(techs.map((teach) => teach.split(" ")).flat());
console.log(techs.flatMap((teach) => teach.split(" ")));
