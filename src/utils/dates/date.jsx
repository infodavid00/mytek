export function startOfWeek() {
  const currentDate = new Date();
  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
  const year = firstDayOfWeek.getFullYear();
  const month = String(firstDayOfWeek.getMonth() + 1).padStart(2, "0");
  const day = String(firstDayOfWeek.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function startOfMonth(currentDate = new Date()) {
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const year = firstDayOfMonth.getFullYear();
  const month = String(firstDayOfMonth.getMonth() + 1).padStart(2, "0");
  const day = String(firstDayOfMonth.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function currentDayName(currentDate = new Date()) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayName = daysOfWeek[currentDate.getDay()];
  return currentDayName;
}

export function currentMonthName(currentDate = new Date()) {
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonthName = monthsOfYear[currentDate.getMonth()];
  return currentMonthName;
}


export function showDateYear(specificDate = new Date()) {
  const specificYear = specificDate.getFullYear().toString();
  return specificYear;
}


export function getOneTwoAndThreeMonthBack() {
  const currentDate = new Date();
  const oneMonthsBack = new Date(currentDate);
  oneMonthsBack.setMonth(currentDate.getMonth() - 1);
  const twoMonthsBack = new Date(currentDate);
  twoMonthsBack.setMonth(currentDate.getMonth() - 2);
  const threeMonthsBack = new Date(currentDate);
  threeMonthsBack.setMonth(currentDate.getMonth() - 3);
  return [oneMonthsBack, twoMonthsBack, threeMonthsBack];
}
