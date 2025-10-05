const startButton = document.getElementById("startButton");
const datetimeInput = document.getElementById("datetimeInput");
const countdownDisplay = document.getElementById("countdownDisplay");

let countdownInterval;

startButton.addEventListener("click", () => {
  const targetDate = new Date(datetimeInput.value).getTime();

  if (isNaN(targetDate)) {
    alert("Please select a valid date and time!");
    return;
  }

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = "Time's up!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownDisplay.textContent = `${days
      .toString()
      .padStart(2, "0")}d ${hours
      .toString()
      .padStart(2, "0")}h ${minutes
      .toString()
      .padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`;
  }, 1000);
});
