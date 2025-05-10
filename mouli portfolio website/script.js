document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
    alert('Thank you for reaching out, Chandra Mouli will contact you soon!');
    this.reset(); // Clear the form
  });
  