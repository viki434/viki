// Fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const profile = document.querySelector(".profile");
  profile.style.opacity = 0;
  setTimeout(() => {
    profile.style.transition = "opacity 1s ease-in-out";
    profile.style.opacity = 1;
  }, 100);
});

// Optional: Copy Discord username
function copyDiscordTag() {
  const discordTag = "@YourDiscord#0000";
  navigator.clipboard.writeText(discordTag).then(() => {
    alert(`Copied ${discordTag} to clipboard!`);
  });
}

// Optional: Visit counter (local only unless backend is used)
let visits = localStorage.getItem("visit-count");
visits = visits ? parseInt(visits) + 1 : 1;
localStorage.setItem("visit-count", visits);
document.getElementById("visit-counter")?.textContent = `Visits: ${visits}`;
