function checkLeapYear() {
  const year = parseInt(document.getElementById("yearInput").value);
  const result = document.getElementById("result");

  if (isNaN(year)) {
    result.textContent = "Please enter a valid year.";
    result.style.color = "red";
    return;
  }

  // Algorithm for leap year (Gregorian)
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        result.textContent = year + " is a Leap Year ✅";
        result.style.color = "green";
      } else {
        result.textContent = year + " is NOT a Leap Year ❌";
        result.style.color = "red";
      }
    } else {
      result.textContent = year + " is a Leap Year ✅";
      result.style.color = "green";
    }
  } else {
    result.textContent = year + " is NOT a Leap Year ❌";
    result.style.color = "red";
  }
}
