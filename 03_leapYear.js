function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log("Leap");
  } else {
    console.log("Not Leap");
  }
}

checkLeapYear(2023);
checkLeapYear(2024);
checkLeapYear(2027);
