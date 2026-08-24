// console.log(1 + 2);

// let test = "hello world";

// let dnv = 1;

// let pmv = 3;

// const name = 2;

// dnv = 6;

// console.log(test);

// console.log(dnv+pmv)

// console.log(String(10) + Number("20"))

// const firstName = 10;

// console.log(firstName)

// const weather = 25;

// if (weather < 20) {
//   console.log("Остаться дома");
// } else if ((weather) => 25) {
//   console.log("пойти купаться");
// } else {
//   console.log("Выйти на улицу");
// }

// const a = +prompt("Введите первое число", 0);
// const b = +prompt("Введите второе число", 0);
// const max = a > b ? a : b;

// console.log(max);

const weatherOutside = "";

switch (weatherOutside) {
  case "дождь":
    console.log("взять зонтик");
    break;
  case "солнце":
    console.log("пойти гулять");
    break;
  case "холодно":
    console.log("остаться дома");
    break;
  default:
    console.log("непонятно");
}

for (let l = 1; l <= 10; l += 1) {
  console.log("пробежали круг:", l);
  if (l % 2 === 0) {
    console.log("проверяем число на четность:", l);
  }
}

let d = 1;

while (d < 5) {
  console.log(d);
  d++;
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`внешний цикл: ${i}`, `внутренний цикл: ${j}`);
  }
}

function sumAndLog(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

const result = sumAndLog(11, 5);
sumAndLog(1, 5);

console.log(result)