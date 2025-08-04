// Typewriter animation
window.addEventListener("DOMContentLoaded", () => {
  const message = "WELCOME, SENIOR RESEARCHER GLENWOOD";
  const typewriter = document.getElementById("typewriter");
  let i = 0;

  function toggleFolder(color) {
    const folderId = `${color}-docs`;
    const folder = document.getElementById(folderId);
    if (!folder) return;
  
    const allLists = document.querySelectorAll('.doc-list');
    allLists.forEach(list => {
      if (list.id === folderId) {
        list.classList.toggle('show');
      } else {
        list.classList.remove('show');
      }
    });
  }

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

// Journal PDF Viewer Nav

const journals = {
  childhood: [
    { src: "journals/Insidecover.png", title: "Inside Cover" },
    { src: "journals/Notebook.png", title: "Notebook" },
    { src: "journals/Katzchen.png", title: "Kätzchen" },
    { src: "journals/Visitors.png", title: "Visitors" }, 
    { src: "journals/Counts.png", title: "Counts" },
    { src: "journals/Counts2.png", title: "Counts, Revisited" }
  ],
  midteens: [
    { src: "journals/Essays.png", title: "Essays" },
    { src: "journals/Legitimate.png", title: "Legitimate" },
    { src: "journals/Prussia.png", title: "Prussia" }
  ],
  finals: [
    { src: "journals/Underground.png", title: "Underground" },
    { src: "journals/Letters.png", title: "Letters" },
    { src: "journals/Apres.png", title: "Aprés" }
  ],
};

let currentJournal = []; 
let currentIndex = 0; 

function openJournal(name) {
  currentJournal = journals[name];
  currentIndex = 0; 
  document.getElementById('journalModal').style.display = 'flex';
  renderCurrentPage();
}

function closeJournal() {
  document.getElementById('journalModal').style.display = 'none';
  document.getElementById('journalImage').src = '';
}

function renderCurrentPage() {
  const entry = currentJournal[currentIndex];
  document.getElementById('journalImage').src = entry.src; // render actual image DO NOT COMMENT THIS OUT
  document.getElementById('page-count').textContent = `Page ${currentIndex + 1} of ${currentJournal.length}`;
  document.getElementById('page-title').textContent = entry.title || "";
}

function nextPage() {
  if (currentIndex < currentJournal.length - 1) {
    currentIndex++;
    renderCurrentPage();
    document.getElementById('pageturn').play();
  }
}

function prevPage() {
  if (currentIndex > 0) {
    currentIndex--;
    renderCurrentPage();
    document.getElementById('pageturn').play();
  }
}