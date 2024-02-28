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

export function startOfMonth() {
  const currentDate = new Date();
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
