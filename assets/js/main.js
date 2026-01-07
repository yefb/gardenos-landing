// GardenOS Landing Page Scripts

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Handle screenshot loading errors gracefully
document.querySelectorAll('.iphone-screen').forEach(img => {
  img.addEventListener('error', function() {
    this.parentElement.classList.add('no-screenshot');
  });

  // Check if image loaded successfully
  img.addEventListener('load', function() {
    this.parentElement.classList.remove('no-screenshot');
    const placeholder = this.nextElementSibling;
    if (placeholder && placeholder.classList.contains('iphone-placeholder')) {
      placeholder.style.display = 'none';
    }
  });
});

// Email form handling (placeholder - will need backend integration)
const notifyForm = document.querySelector('.notify-form');
if (notifyForm) {
  notifyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    // TODO: Integrate with email service (Mailchimp, ConvertKit, etc.)
    console.log('Email signup:', email);
    alert('Thanks! We\'ll notify you when GardenOS launches.');
    this.reset();
  });
}
