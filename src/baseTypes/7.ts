/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum daysOfTheWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: daysOfTheWeek): boolean => {
  if (day === 5 || day === 6) return true;
  else return false;
};

console.log(isWeekend(daysOfTheWeek.Sunday));
console.log(isWeekend(daysOfTheWeek.Monday));
