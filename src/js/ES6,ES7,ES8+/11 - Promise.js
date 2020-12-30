// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("succses");
//   }, 500);
// });

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Done! ${ms}`);
    }, ms);
  });
};

// delay(1000)
//   .then((data) => delay(500))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(err))
//   .finally((err) => console.log("complete"));

// async function func() {
//   try {
//     const data = await delay(2000);
//     console.log(data);
//   } catch (error) {
//     console.log("Error", error);
//   }
// }
// func();

// Promise.all([delay(1000), delay(500), delay(2000)]).then((data) =>
//   console.log(data)
// );

Promise.race([delay(1000), delay(500), delay(2000)]).then((data) =>
  console.log(data)
);
