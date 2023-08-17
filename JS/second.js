const date = new Date();

let currentDay = String(date.getDate() + 1).padStart(2, '0');

let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

let currentYear = date.getFullYear();

let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const test = document.getElementById("Date");

test.setAttribute("min", currentDate);