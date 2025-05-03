const ball = document.getElementById("ball");
const countDisplay = document.getElementById("count");
let count = parseInt(localStorage.getItem("animationCount")) || 0;
countDisplay.textContent = count;

// Apply saved theme if any
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}

function triggerAnimation() {
  ball.classList.add("bounce");

  // Remove animation class after it ends so it can be reapplied
  setTimeout(() => {
    ball.classList.remove("bounce");
  }, 600);

  // Update localStorage count
  count++;
  localStorage.setItem("animationCount", count);
  countDisplay.textContent = count;
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
