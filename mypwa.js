// Add event listeners to the navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', navigate);
});

// Function to handle navigation
function navigate(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Register the service worker for offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}
