// Typewriter animation
window.addEventListener("DOMContentLoaded", () => {
  const message = "WELCOME, SENIOR RESEARCHER GLENWOOD";
  const typewriter = document.getElementById("typewriter");
  let i = 0;



  function typeNext() {
    if (i < message.length) {
      typewriter.textContent += message.charAt(i);
      i++;
      setTimeout(typeNext, 50);
    }
  }
  typeNext();

  // Play welcome audio once per session
  const welcomeAudio = document.getElementById('welcomeAudio');
  welcomeAudio.play().catch(err => console.warn("Autoplay error:", err));
  if (welcomeAudio && !sessionStorage.getItem('welcomePlayed')) {
    welcomeAudio.volume = 1.0;
    welcomeAudio.play().catch((err) => {
      console.warn("Autoplay failed:", err);
    });
    sessionStorage.setItem('welcomePlayed', 'true');
  }
});

// Open full document if access granted
function openDocument(path) {
  const grantedSound = document.getElementById("grantedSound");
  grantedSound.volume = 1.0;
  grantedSound.play();

  const modal = document.getElementById("doc-modal");
  const modalImage = document.getElementById("modal-image");
  modalImage.src = path;
  modal.style.display = "flex";
}

// Close full image modal
function closeModal() {
  document.getElementById("doc-modal").style.display = "none";
}

// Denied access behavior
function playDenied() {
  const deniedSound = document.getElementById("deniedSound");
  deniedSound.volume = 1.0;
  deniedSound.play();

  const overlay = document.getElementById("access-overlay");
  document.getElementById("access-message").textContent = "ACCESS DENIED";
  overlay.style.display = "flex";

  setTimeout(() => {
    overlay.style.display = "none";
  }, 1500);
}
