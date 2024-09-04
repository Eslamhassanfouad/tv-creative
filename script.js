// Get elements
const openPopupBtn = document.getElementById("open-popup");
const popup = document.getElementById("signup-popup");
const closePopupBtn = document.getElementById("close-popup");
const signupForm = document.getElementById("signup-form");
const videoOverlay = document.getElementById("video-overlay");
const lockedText = document.getElementById("locked-text");
const lockedTextTitle = document.getElementById("locked-text-title");
const lockedTextSubtext = document.getElementById("locked-text-subtext");

// Open popup when video button is clicked
openPopupBtn.addEventListener("click", function () {
  popup.style.display = "flex";
});

// Close popup
closePopupBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

// Handle form submission
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Remove the overlay and blur effect
  videoOverlay.style.display = "none";
  lockedText.style.filter = "none";
  lockedText.style.color = "#333";
  lockedTextTitle.style.filter = "none";
  lockedTextTitle.style.color = "#333";
  lockedTextSubtext.style.filter = "none";
  lockedTextSubtext.style.color = "#333";

  // Remove the locked content notice by setting display to 'none'
  const lockedNotice = lockedText.querySelector(".locked-notice");
  if (lockedNotice) {
    lockedNotice.style.display = "none";
  }

  // Close the popup
  popup.style.display = "none";
  continueReadingBtn.style.display = "none";
});

// Get the "Continue Reading" button
const continueReadingBtn = document.getElementById("continue-reading");

// Open popup when "Continue Reading" button is clicked
continueReadingBtn.addEventListener("click", function () {
  popup.style.display = "flex"; // Open the popup
});
