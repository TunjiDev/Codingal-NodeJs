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

//PART 3
async function fetchAPODData(date) {
  try {
    const endpoint = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`;
    console.log("Fetching APOD data for date:", date); // Log the date for which APOD data is being fetched
    const response = await fetch(endpoint);
    console.log("Full fetch response:", response); // Log the full fetch response
    const data = await response.json();
    console.log("Received APOD data:", data); // Log the received APOD data
    updateUI(data, date);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function updateUI(data, date) {
  console.log("Updating UI with APOD data for date:", date); // Log the UI update action
  document.getElementById("apodImage").style.backgroundImage = `url('${data.hdurl}')`;
  document.getElementById("apodDescription").textContent = data.explanation;
  document.getElementById("apodDate").textContent = `Date: ${date}`;
  document.getElementById("apodTitle").textContent = data.title;
}
//PART 3
