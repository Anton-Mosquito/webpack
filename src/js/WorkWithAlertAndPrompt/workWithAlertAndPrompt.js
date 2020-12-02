// 1. Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».
!function () {
  const name = prompt(`Enter Your's name!`);
  console.log(`Hi, ${name}!`);
};
// 2. Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу.
!function () {
  const birthday = +prompt(`Enter Your's year of Birthday!`);
  const currentYear = 2020;
  console.log(currentYear - birthday);
};

// 3. Запросите у пользователя длину стороны квадрата и вы-
// ведите периметр такого квадрата.
function sdsdf() {
  const side = +prompt(`Enter side of square`);
  console.log("Perimetr of Square= " + side * side);
}
