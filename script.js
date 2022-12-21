// Smooth scroll effect when clicking on navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade in effect for images and videos
const media = document.querySelectorAll('img, video');
window.addEventListener('scroll', () => {
  media.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('fade-in');
    }
  });
});

// Helper function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// create a function to let users toggle between light and dark mode