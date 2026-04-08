// PART 2
const API_KEY = "Yv4IhJaPNvg27tUPtMLUZyRgnF1JF0E0TdvJlGKG";

function initializeDatepicker() {
  const today = new Date();
  const formattedToday = formatDate(today);
  console.log("Initializing date picker with today's date:", formattedToday); // Log the formatted today date
  document.getElementById("datePicker").max = formattedToday;
  document.getElementById("datePicker").value = formattedToday;
}

function getRandomDate() {
  const start = new Date("1995-06-16");
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  console.log("Generated random date:", formatDate(randomDate)); // Log the generated random date
  return randomDate;
}

function formatDate(date) {
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString().padStart(2, "0");
  const dd = date.getDate().toString().padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
// PART 2
