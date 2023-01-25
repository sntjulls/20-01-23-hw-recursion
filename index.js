// написати рекурсивну функцію, яка приймає число і повертає рядок з вкладених пар круглих дужок.
// кількість пар дорівнює прийнятому аргументу.
// якщо число(аргумет) менше 1 - повертаємо лише одну пару круглих дужок
// //pairBrickets(4) => '(((())))'

// //pairBrickets(-4) => '()'
// //pairBrickets('qwe') => throw

/**
 *
 * @param {number} number
 * @returns {string}
 */
const pairBrackets = (number) => {
  if (typeof number !== "number") {
    throw new TypeError("must be a number");
  }
  if (number <= 1) {
    return "()";
  }
  return "(" + pairBrackets(number - 1) + ")";
};

try {
  console.log(pairBrackets(3));
} catch (error) {
  console.log(error);
}

// написати рекурсивну функцію, яка приймає два числа і повертає найбільший спільний дільник цих двох чисел
// // getDivider(24, 15) -> 3
// // getDivider(3, 3) -> 3
// // getDivider(7, 3) -> 1

// Алгоритм Евкліда дозволяє знайти НСД двох натуральних чисел.
// Суть алгоритму Евкліда – два числа порівнюють і від більшого віднімають менше до тих пір, поки числа не стануть рівними. Число, якому вони стануть рівними, і є їх найбільший спільний дільник.

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const getDivider = (a, b) => {
  if (typeof a !== "number" && typeof b !== "number") {
    throw new TypeError("must be a number");
  }
  if (a <= 0 && b <= 0) {
    throw new RangeError("numbers must be greater than zero");
  }
  return b ? getDivider(b, a % b) : a;
};

try {
  console.log(getDivider(24, 15));
} catch (error) {
  console.log(error);
}
